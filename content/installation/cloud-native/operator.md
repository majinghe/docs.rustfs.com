---
title: "Operator Installation"
description: "Install the RustFS Kubernetes Operator and create a development Tenant custom resource."
---

Use the RustFS Kubernetes Operator when you want to manage RustFS clusters as namespaced `Tenant` custom resources. The Operator reconciles the RBAC, Services, StatefulSets, and persistent volume claims required by each Tenant.

:::warning[Pre-release software]

The RustFS Operator is currently `v0.1.0` pre-release and under active development. Evaluate it in a non-production cluster and review the [upstream Operator repository](https://github.com/rustfs/operator) before adopting it.

:::

You need Kubernetes 1.30 or newer, Helm 3, `kubectl` access to the target cluster, and a StorageClass that can satisfy Tenant persistent volume claims.

## 1. Get the Operator chart

Clone the official Operator repository. Its Helm chart is stored under `deploy/rustfs-operator`:

```bash
git clone https://github.com/rustfs/operator.git
cd operator
```

## 2. Install the Operator

Install the Operator and its custom resource definitions in the `rustfs-system` namespace:

```bash
helm install rustfs-operator deploy/rustfs-operator/ \
  --namespace rustfs-system \
  --create-namespace
```

Verify the Operator and Console pods:

```bash
kubectl get pods -n rustfs-system
kubectl logs -n rustfs-system \
  -l app.kubernetes.io/name=rustfs-operator,app.kubernetes.io/component=operator
```

## 3. Create a development Tenant

Create a minimal single-node Tenant for evaluation:

```yaml title="tenant.yaml"
apiVersion: rustfs.com/v1alpha1
kind: Tenant
metadata:
  name: dev-minimal
  namespace: default
spec:
  image: rustfs/rustfs:latest
  pools:
    - name: dev-pool
      servers: 1
      persistence:
        volumesPerServer: 1
```

:::warning[Development credentials]

This minimal manifest does not configure a credential Secret and is suitable only for local evaluation. For production-style testing, create a Kubernetes Secret containing `accesskey` and `secretkey`, then reference it with `spec.credsSecret.name`.

:::

Apply the Tenant and wait for its pod to become ready:

```bash
kubectl apply -f tenant.yaml
kubectl get tenant dev-minimal
kubectl get pods,pvc,svc -l rustfs.tenant=dev-minimal
kubectl wait --for=condition=ready pod \
  -l rustfs.tenant=dev-minimal \
  --timeout=300s
```

## 4. Access the Tenant

Forward the Tenant S3 API:

```bash
kubectl port-forward svc/dev-minimal-io 9000:9000
```

In another terminal, forward the Tenant Console:

```bash
kubectl port-forward svc/dev-minimal-console 9001:9001
```

The S3 API is available at `http://localhost:9000`, and the Tenant Console is available at `http://localhost:9001`.

## Next steps

- Review the [Operator user guide](https://github.com/rustfs/operator/blob/main/docs/operator-user-guide.md)
- Review the [Tenant examples](https://github.com/rustfs/operator/tree/main/examples)
- [Configure TLS](/integration/tls-configured)
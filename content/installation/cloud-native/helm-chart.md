---
title: "Helm Chart Installation"
description: "Deploy a standalone or distributed RustFS cluster on Kubernetes with the official Helm chart."
---

Use the official RustFS Helm chart when you want Helm to manage one RustFS deployment directly. You need a Kubernetes cluster, `kubectl`, Helm 3, and a StorageClass that can provision the required persistent volumes.

## 1. Get the chart

The chart is stored in the RustFS source repository under `helm/rustfs`:

```bash
git clone https://github.com/rustfs/rustfs.git
cd rustfs/helm/rustfs
```

## 2. Install RustFS

Install the chart in a dedicated namespace and replace the credential placeholders before running the command:

```bash
helm install rustfs . \
  --namespace rustfs \
  --create-namespace \
  --set secret.rustfs.access_key=<your-access-key> \
  --set secret.rustfs.secret_key=<your-secret-key> \
  --set storageclass.dataStorageSize=100Gi \
  --set storageclass.logStorageSize=1Gi
```

The chart deploys distributed mode by default. For a development-only standalone deployment, add these values:

```bash
--set mode.standalone.enabled=true \
--set mode.distributed.enabled=false
```

## 3. Verify the deployment

Wait for the RustFS pods to become ready:

```bash
kubectl -n rustfs get pods -w
```

Without an Ingress, forward the S3 API and Console services to your workstation:

```bash
kubectl -n rustfs port-forward svc/rustfs 9000:9000 9001:9001
```

The S3 API is available at `http://localhost:9000`, and the Console is available at `http://localhost:9001`.

For storage sizing, probes, ingress, TLS, server pools, and uninstall steps, see the [complete Kubernetes Helm guide](/installation/cloud-native).

## Next steps

- [Install with the RustFS Operator](/installation/cloud-native/operator)
- [Configure TLS](/integration/tls-configured)
- [Observe RustFS](/operations/observability)
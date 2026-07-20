---
title: "Kubernetes Upgrade"
description: "Upgrade RustFS deployments managed by Kubernetes and verify workload readiness."
---

Upgrade a Kubernetes deployment by updating the RustFS image through the same controller or package manager that owns the workload. Preserve the existing persistent volume claims and configuration.

## Before you upgrade

Read the target release notes, record the current image tag and Helm values or Tenant manifest, and verify that all RustFS pods are ready:

```bash
kubectl -n <namespace> get pods
```

## Apply the upgrade

For a Helm-managed deployment, update the image value in your saved values and apply it with `helm upgrade`. For an Operator-managed deployment, update the Tenant image field and apply the manifest through `kubectl`.

Monitor the pods until the workload becomes ready:

```bash
kubectl -n <namespace> get pods -w
```

See the [Helm Chart Installation](/installation/cloud-native/helm-chart) and [Operator Installation](/installation/cloud-native/operator) guides for the verified deployment layouts.

## Roll back

Restore the previous image value through Helm or the Tenant manifest, then wait for all pods to become ready. Do not delete persistent volume claims during rollback.

## Next steps

Review [Observability](/operations/observability) to monitor the deployment after the rollout.
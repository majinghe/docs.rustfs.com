---
title: "Container Upgrade"
description: "Upgrade containerized RustFS deployments while preserving persistent data and cluster availability."
---

Upgrade a container deployment by replacing the RustFS container image while preserving its data volumes, environment configuration, ports, and restart policy.

## Before you upgrade

Record the current image tag and container configuration, then confirm the S3 API is healthy:

```bash
curl -fsS http://localhost:9000/health/ready
```

Use an explicit image tag for both the upgrade and rollback. Do not remove or recreate the persistent volume that contains `/data`.

## Replace the container

Pull the target image, stop the existing container, and recreate it with the same volume mounts and configuration. For a multi-node deployment, replace one node at a time and wait for its readiness endpoint to return successfully before continuing.

See [Docker Installation](/installation/container/docker) for the verified container ports, persistent volume mount, and startup arguments.

## Roll back

Recreate the container with the previous image tag and the unchanged persistent volume and environment configuration. Verify readiness before rolling back another node.

## Next steps

Review [Cluster Health Check](/operations/cluster-health-check) for additional post-upgrade validation.
---
title: "Cluster Health Check"
description: "Check RustFS node readiness and cluster read and write health endpoints."
---

RustFS serves health endpoints from the S3 listener on port `9000`.

| Endpoint | Purpose |
| --- | --- |
| `GET /health/live` | Confirms that the process is running. |
| `GET /health/ready` | Confirms storage, IAM, and peer readiness. |
| `GET /minio/health/cluster` | Checks cluster write health and lock quorum. |
| `GET /minio/health/cluster/read` | Checks cluster read health and lock quorum. |

Check every node before maintenance:

```bash
curl -fsS http://<node>:9000/health/ready
```

A ready node returns HTTP `200`. For telemetry configuration and alerting guidance, see [Observability](./observability.md).
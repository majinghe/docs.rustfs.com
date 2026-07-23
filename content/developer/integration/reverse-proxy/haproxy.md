---
title: "HAProxy"
description: "Connect HAProxy to the RustFS S3 API and Console endpoints."
---

Use **HAProxy** to route external traffic to the RustFS S3 API and Console.

## Routing model

Define separate frontends and backends for the two RustFS endpoints:

- Send S3 API traffic to `<server-ip>:9000`.
- Send Console traffic to `<server-ip>:9001`.

Preserve the request host, serve the S3 API from the root path, and use health checks appropriate for your deployment. Terminate TLS at HAProxy or pass encrypted traffic through to RustFS according to your certificate ownership model.

## Next steps

See [Virtual-Host Access](/integration/virtual) before enabling virtual-hosted-style bucket URLs.
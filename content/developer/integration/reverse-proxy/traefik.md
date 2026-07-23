---
title: "Traefik"
description: "Connect Traefik to the RustFS S3 API and Console endpoints."
---

Use **Traefik** to route external traffic to the RustFS S3 API and Console.

## Routing model

Create separate routers for the two RustFS endpoints:

- Route the S3 hostname to `http://<server-ip>:9000`.
- Route the Console hostname to `http://<server-ip>:9001`.

Keep the original `Host` header and serve the S3 API from the root path. Configure TLS on each router when the endpoints are available outside a trusted network.

## Next steps

See [Virtual-Host Access](/integration/virtual) before enabling virtual-hosted-style bucket URLs.
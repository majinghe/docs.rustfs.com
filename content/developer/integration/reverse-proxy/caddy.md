---
title: "Caddy"
description: "Connect Caddy to the RustFS S3 API and Console endpoints."
---

Use **Caddy** to route external traffic to the RustFS S3 API and Console.

## Routing model

Configure one site address for each RustFS endpoint:

- Proxy the S3 hostname to `http://<server-ip>:9000`.
- Proxy the Console hostname to `http://<server-ip>:9001`.

Serve the S3 API from the root path and preserve the request host. Configure certificates that match the public hostnames used by clients.

## Next steps

See [Virtual-Host Access](/integration/virtual) before enabling virtual-hosted-style bucket URLs.
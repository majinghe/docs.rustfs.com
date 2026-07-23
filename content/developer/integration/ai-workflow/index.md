---
title: "AI Workflow"
description: "Connect AI workflow platforms to RustFS through S3-compatible storage interfaces."
---

Use **RustFS** as S3-compatible object storage for AI workflow platforms that accept a custom S3 endpoint.

## Platforms

- [Dify](./dify.md)
- [n8n](./n8n.md)

Create dedicated access credentials and a bucket for each platform. Use path-style addressing unless the platform and RustFS deployment are both configured for virtual-hosted-style access.
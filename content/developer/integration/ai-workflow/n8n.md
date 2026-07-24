---
title: "n8n"
description: "Prepare a RustFS S3-compatible endpoint for use with n8n workflows."
---

Connect **n8n** workflows to RustFS through an S3-compatible integration or node.

## RustFS connection values

Prepare the following values in the n8n credential or node configuration:

- Endpoint: `http://localhost:9000` for a local deployment, or the externally reachable S3 endpoint.
- Region: `us-east-1`.
- Bucket: `my-bucket`.
- Credentials: a dedicated access key and secret key.
- Addressing: path-style.

The available fields depend on the n8n version and S3 integration in use. Confirm that the selected integration accepts a custom endpoint and path-style addressing.

## Next steps

See [Access Key Management](/security-compliance/iam/access-token) to create dedicated credentials.
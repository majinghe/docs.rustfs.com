---
title: "Dify"
description: "Prepare a RustFS S3-compatible endpoint for use with Dify."
---

Connect **Dify** to RustFS when your Dify deployment supports an S3-compatible storage backend.

## RustFS connection values

Prepare the following values before configuring Dify:

- Endpoint: `http://localhost:9000` for a local deployment, or the externally reachable S3 endpoint.
- Region: `us-east-1`.
- Bucket: `my-bucket`.
- Credentials: a dedicated access key and secret key.
- Addressing: path-style.

The exact setting names depend on the Dify version and deployment method. Match these values to the S3 storage settings documented for your Dify release.

## Next steps

See [Access Key Management](/security-compliance/iam/access-token) to create dedicated credentials.
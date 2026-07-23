---
title: "Iceberg"
description: "Prepare RustFS as S3-compatible object storage for Apache Iceberg tables."
---

Use **RustFS** as the object storage layer for **Apache Iceberg** through an S3-compatible file system supported by your query engine or catalog environment.

## RustFS connection values

Prepare the following values in the engine that reads and writes Iceberg tables:

- Endpoint: `http://localhost:9000` for a local deployment, or the externally reachable S3 endpoint.
- Region: `us-east-1`.
- Bucket: `my-bucket`.
- Credentials: a dedicated access key and secret key.
- Addressing: path-style.

Iceberg does not define one universal object-store configuration. Apply these values to the S3 settings of the engine or file system implementation in your deployment.

## Next steps

See [Access Key Management](/administration/iam/access-token) to create dedicated credentials.
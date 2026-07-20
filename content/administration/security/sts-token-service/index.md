---
title: "STS Token Service"
description: "Learn how RustFS issues temporary credentials through the Security Token Service."
---

The RustFS Security Token Service (STS) issues temporary credentials for existing IAM identities and external OpenID Connect (OIDC) identities.

## STS workflows

RustFS supports temporary credential workflows through `AssumeRole` and `AssumeRoleWithWebIdentity`. See [Service Accounts and STS](/administration/iam/sts) for the verified request parameters, credential behavior, and usage guidance.

For identity-provider configuration, see [External Identity (OIDC)](/administration/security/oidc).

## Next steps

Review [IAM Management](/administration/iam) to understand how RustFS evaluates policies for temporary credentials.
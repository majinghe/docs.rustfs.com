---
title: "Event Notifications"
description: "Find the verified RustFS environment variables for configuring bucket event notification targets."
---

RustFS bucket event notifications send object and bucket events to configured external targets. Use this page to find the currently verified configuration surface.

## Enable event notifications

Set `RUSTFS_NOTIFY_ENABLE` to enable the bucket event notification module. Notification targets use the `RUSTFS_NOTIFY_<TARGET>_<KEY>` environment-variable pattern.

RustFS provides configuration families for webhook, Kafka, MQTT, MySQL, PostgreSQL, NATS, Redis, AMQP, and Pulsar targets.

See the [environment variable reference](/reference/environment-variables#audit-and-notification-targets) for the verified module switch, target pattern, and webhook settings. End-to-end delivery examples will be added after runtime validation.

## Next steps

Review [Observability](/operations/observability) to configure metrics, logs, and traces for your deployment.
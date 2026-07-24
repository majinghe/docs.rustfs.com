---
title: "Status Check"
description: "Check RustFS cluster health and storage capacity from the Console or rc."
---

Use the **Status** page in the RustFS Console or the `rc` command line to review cluster availability and storage consumption. Before using the command-line workflow, [install `rc`](/operations/rc) and configure an alias for the target cluster.

## Cluster status

### Console

1. Sign in to the RustFS Console.
2. Open **Status**.
3. Confirm that the cluster is online and review the server, network, and drive status.
4. Investigate any offline server, unavailable drive, or failed network connection before maintenance or capacity changes.

### rc

Run the cluster information command with your configured alias:

```bash
rc admin info cluster rustfs
```

The overview reports the cluster state, RustFS version, server and disk counts, backend type, and erasure-coding parity. The node list shows uptime, network connectivity, drive availability, and pool membership. The disk list shows each drive's state and pool, set, and disk location.

For machine-readable output, request JSON:

```bash
rc admin info cluster rustfs --json
```

## Storage capacity

### Console

1. Sign in to the RustFS Console and open **Status**.
2. Review the cluster's used and total storage capacity.
3. Review the capacity and available space for each disk.
4. Compare usage over time and plan expansion before available capacity becomes insufficient for normal writes and maintenance.

### rc

Use the same cluster information command:

```bash
rc admin info cluster rustfs
```

The **Storage** summary reports used capacity, total capacity, and the used percentage for the cluster. Each entry under **Disks** reports used, total, and available capacity for that drive.

Use JSON output when collecting the values in a script or monitoring integration:

```bash
rc admin info cluster rustfs --json
```

Administrative information commands require credentials with the corresponding RustFS Admin API permissions.

## Next steps

For continuous telemetry and alerting, continue with [Observability](./observability.md). To add storage, review [Pool Expansion](./scaling/storage-pool-expansion.md).
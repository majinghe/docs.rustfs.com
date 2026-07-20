---
title: "Rebalancing"
description: "Redistribute existing objects across RustFS storage pools after expanding a cluster."
---

After you add a storage pool, new writes prefer pools with more free space, but existing objects remain in their current pools. Rebalancing redistributes existing objects across all active pools.

See [Rebalance After Expansion](./storage-pool-decommission.md#rebalance-after-expansion) for the verified admin API endpoints, progress fields, and stop behavior.
---
title: "RustFS Architecture"
description: "Introduction to RustFS Architecture"
---

# RustFS Architecture

RustFS is an object storage system, similar to the well-known AWS S3. As a MinIO alternative, RustFS references MinIO's concise, lightweight, scalable, and elegant architecture.

Objects can be documents, videos, PDF files, etc. To store objects, MinIO provides a scalable, flexible, and efficient solution for storing, accessing, and managing data. Its compatibility with AWS S3 API enables seamless integration with AWS S3-based applications.

The architecture diagram is as follows:

![RustFS Architecture Diagram](./images/s2-1.png)

This is RustFS's basic architecture. A distributed grid is a computer architecture that uses multiple nodes to execute a single task. Nodes are connected to each other through a network, enabling them to communicate with each other.

## Consistency Design

In both distributed and single-machine modes, all read and write operations strictly follow the read-after-write consistency model.

## Several Important Concepts in RustFS

**Object**: The basic object stored in RustFS, such as files, byte streams, anything...

**Bucket**: A logical space used to store Objects. Data between each Bucket is isolated from each other. For clients, it's equivalent to a top-level folder for storing files.

**Drive**: The disk that stores data, passed as a parameter when RustFS starts. All object data in RustFS will be stored in Drives.

**Set**: A collection of a group of Drives. Distributed deployment automatically divides one or more Sets based on cluster scale. Drives in each Set are distributed in different locations. An object is stored on one Set. (Some places also call the combination of Sets **Strips** - stripes).

Therefore, before designing the architecture and deploying devices, note that:

1. One object is stored on one Set;

2. One cluster is divided into multiple Sets;

3. The number of Drives contained in one Set is fixed, defaulting to automatic calculation by the system based on cluster scale;

4. Drives in one Set should be distributed across different nodes as much as possible;

## Special Thanks

Traditional distributed storage architectures must have: Master nodes, MetaData nodes, and Data Node nodes. This design pattern makes user deployment very complex. At the same time, without rich distributed storage management experience, once metadata is lost, there is a risk of data loss.

All nodes are peer-level nodes, greatly simplifying the architecture design and eliminating concerns about metadata loss. A single command can start the system.

Without losing elegance, simplicity, and reliability, RustFS adopts the same architectural design as MinIO.

Thanks to MinIO's architectural philosophy, which greatly facilitates global users and promotes the S3 protocol.

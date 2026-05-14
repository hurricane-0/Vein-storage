# VEIN Storage Contracts

This repository publishes the public storage contract for VEIN so third-party
developers can reuse the same product data structure without depending on the
browser extension codebase.

## What is included

- Stable TypeScript types for collections, blocks, canvases, tags, RIL items,
  and sync metadata.
- A single `STORAGE_CONTRACT_VERSION` constant for compatibility checks.


## Relationship to the extension

The browser extension keeps its own implementation-specific database layer.
This repository exposes the public contract that can be reused by external
tools, integrations, and companion apps.


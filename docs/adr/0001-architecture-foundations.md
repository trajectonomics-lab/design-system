# ADR 0001: Architecture Foundations for @trajectonomics/design-system

## Status

Accepted

## Context

`trajectonomics/design-system` is established to provide the foundational design tokens, theme contracts, and primitives for the Trajectonomics application ecosystem.
It is built with Bun, TypeScript (strict mode with `isolatedDeclarations`), and Biome under the Trajectonomics architectural guidelines.

## Decision

1. **Package Scope & Module System**: Dual ESM/CJS build via `tsdown` providing full type definitions (`.d.mts`, `.d.cts`) and zero runtime side effects.
2. **Deterministic & Frozen Tokens**: All token definitions, color scales, and theme records are immutable (`Object.freeze`) and deterministic with zero I/O or runtime dependencies.
3. **Domain Integrity**: All domain concepts adhere to [GLOSSARY.md](../../GLOSSARY.md).
4. **Agent Collaboration**: AI agents adhere to [AGENTS.md](../../AGENTS.md) and [CODING_STANDARDS.md](../../CODING_STANDARDS.md).

## Consequences

- Tokens can be safely shared across web applications, desktop apps, and tools without bundler friction.
- Invariants remain verifiable through deterministic tests (`bun test`) and `bun run check`.
- All autonomous agent work is test-first and reviewed against established coding standards.

# ADR 0001: Architecture Foundations for @trajectonomics/design-system

## Status

Accepted

## Context

`trajectonomics/design-system` is established to provide Trajectonomics design system: tokens, themes, and UI primitives.
It is built with Bun, TypeScript, and Biome under the Trajectonomics architectural guidelines.

## Decision

1. **Archetype**: Configured as `core`.
2. **Language & Runtime**: TypeScript (strict mode with `isolatedDeclarations`) executed on Bun.
3. **Domain Integrity**: All domain concepts adhere to [GLOSSARY.md](../../GLOSSARY.md).
4. **Agent Collaboration**: AI agents adhere to [AGENTS.md](../../AGENTS.md) and [CODING_STANDARDS.md](../../CODING_STANDARDS.md).
5. **Scope**: This package is the pure, deterministic core (Design Tokens and Themes). The Svelte UI package and Storybook are planned as separate packages; the template's archetypes do not cover them yet, so their tooling is decided in its own ADR when that work starts.

## Consequences

- Invariants remain verifiable through deterministic tests (`bun test`) and `bun run check`.
- All autonomous agent work is test-first and reviewed against established coding standards.

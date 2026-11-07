# Domain Glossary: @trajectonomics/design-system

Ubiquitous language for `trajectonomics/design-system`. Every term defined here is binding across code, tests, documentation, and PR titles. Synonyms in a diff are defects.

## Core Terms

### Design Token
A named, platform-agnostic design decision (color, spacing, typography, etc.) with a typed value.

### Primitive Token
A raw, context-free Design Token value such as a specific color or size. Primitive Tokens never reference another token.

### Semantic Token
A Design Token named by purpose (for example `color.text.primary`) that aliases a Primitive Token.

### Theme
A named set of values that resolves every Semantic Token for a given context (for example `light` or `dark`).

### Invariant
A rule or condition that must hold true across all state transitions in this system.

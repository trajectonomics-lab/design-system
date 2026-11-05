# Domain Glossary: @trajectonomics/design-system

Ubiquitous language for `trajectonomics/design-system`. Every term defined here is binding across code, tests, documentation, and PR titles. Synonyms in a diff are defects.

## Core Terms

### Design Token
An immutable named entity storing a raw design value (color, spacing, duration, border radius, typography scale). Tokens are categorized into global tokens (primitive values) and semantic tokens (role-based meanings).

### Color Role
The semantic intent assigned to a color token in UI composition (e.g. `canvas`, `surface`, `brand`, `ink`, `accent`, `border`).

### Radius Scale
The fixed discrete set of corner curvature values permitted in Trajectonomics interfaces, ensuring consistent pill and stadium shapes.

### Spacing Scale
The linear or modular numeric scale governing layout gaps, padding, and margins across components.

### Zero-Style Primitive
A typed structural component wrapper that outputs accessible HTML without opinionated styling, delegating appearance to theme tokens.

### Theme
An immutable configuration contract binding semantic roles to concrete design tokens for a specific brand or surface presentation.

### Invariant
A rule or condition that must hold true across all state transitions and outputs in this system. All exported tokens and theme contracts are deeply frozen and immutable.

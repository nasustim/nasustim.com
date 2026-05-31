# UI Layers

`src/ui/` contains shared, reusable UI components organized into two layers.

## basic

Thin wrappers around plain HTML elements. Each component maps directly to a single native element with pre-configured styling via Tailwind CSS.

- **Must not** import from other UI layers.
- **Must not** contain business logic or state management.

### Components

| File | Element | Description |
|---|---|---|
| `texts/H1.tsx` | `<h1>` | Heading with heading font and optional centering |
| `texts/P.tsx` | `<p>` | Body text with sub-primary color |
| `texts/Link.tsx` | `<a>` (via `next/link`) | Anchor with variant styling (`none`, `primary`) |
| `icons/Products.tsx` | `<div>` + react-icons | Icon wrapper for product/SNS icons (GitHub, LinkedIn, Keybase, Blog) |

## composite

Components that compose multiple `basic` components or add interaction logic. Currently empty; will be used when the site grows beyond simple layouts.

- **May** import from `basic`.
- **Must not** import from `feature/`.

## Import rules

```
feature/ --> composite/ --> basic/
              (or)
feature/ --> basic/
```

- `feature/` components may import from `basic/` or `composite/`.
- `composite/` components may import from `basic/` only.
- `basic/` components must be self-contained.

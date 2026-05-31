# UI Layers

`src/ui/` contains shared, reusable UI components organized into two layers.

## File rules

- **No subdirectories** inside `basic/` or `composite/`.
- **Kebab-case** file naming (e.g., `h1-text.tsx`, `product-icon.tsx`).

## basic

Thin wrappers around plain HTML elements.

- **Must not** import from other UI layers.

## composite

Components that compose multiple `basic` components or add interaction logic.

- **May** import from `basic`.
- **Must not** import from `feature/`.

## Import rules

```
feature/ --> composite/ --> basic/
              (or)
feature/ --> basic/
```

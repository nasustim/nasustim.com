# Package Management Rule

## Version Pinning

- Always specify exact patch versions when installing packages (e.g., `1.3.13`, not `^1.3` or `~1.3`).

## GitHub Actions

- Pin action versions to both the commit hash and the version tag as a comment (e.g., `uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd # v6.0.2`).

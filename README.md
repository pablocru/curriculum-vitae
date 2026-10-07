# Curriculum Vitae

Curriculum Vitae (CV) developed using [Astro](https://astro.build/), a modern
web framework designed for generating static content. The primary goal is to
create a structured and customizable CV that can be easily printed or converted
to PDF, ensuring full control over the design and layout. By using `Astro`, it
will be compiled into a single static `index.html`, which provides a reliable
and consistent way to render it across different browsers and devices.

## Language Disclaimer

The CV content is currently written `only in Spanish`, but this will not affect
the core functionality of the project. The generated `index.html` will remain
fully usable across languages. The project's source code and documentation,
however, are in `English` to maintain international accessibility for
developers.

## Getting Started

The toolchain is pinned in `package.json`: Node.js via `devEngines.runtime` and
pnpm via `packageManager`. This keeps local and CI on the same versions.

The recommended way is [mise](https://mise.jdx.dev/), which reads those versions
from `package.json` and installs them for you:

```bash
# installs the pinned Node.js and pnpm
mise install
# installs dependencies
pnpm install
# starts the local dev server
pnpm dev
# builds the static site into dist/
pnpm build
```

Without `mise`, install the `Node.js` and `pnpm` versions declared in
`package.json` manually, then run the same `pnpm` commands.

## Contribute

If you notice any mistakes or have suggestions, I’m all ears! I appreciate any
feedback so don't hesitate to
[open an Issue on GitHub](https://github.com/pablocru/curriculum-vitae/issues).

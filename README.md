# Svelte + Rollup code splitting example

This is a little example on how to configure Svelte and Rollup for code splitting and dynamic imports using `import()`.

I've left the `dist/bundle` folder so you can see the result of the build.

The bundled code uses ES6 modules so you cannot support older browsers. A solution is to provide a fallback script with `<script nomodule>` and create a second Rollup config for grandpa browsers without code splitting.
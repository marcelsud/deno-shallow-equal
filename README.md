# Deno shallow equal

## Maintenance status

This is a stable legacy utility. The existing `shallowEqualArrays` and
`shallowEqualObjects` API and the published Deno `v0.1.3` URLs are preserved.
Maintenance is limited to reproducible regressions; no feature expansion or
mandatory migration is planned. Compatibility with current Deno releases has
not been re-certified by this maintenance notice.

For a pinned existing installation, use:

```typescript
import { shallowEqualArrays, shallowEqualObjects } from "https://deno.land/x/shallow_equal@v0.1.3/mod.ts";
```

For new projects, you can also evaluate the upstream
[shallow-equal](https://github.com/moroshko/shallow-equal) through Deno's npm
support. Check shallow comparison semantics in your application before changing
imports; deep equality is a different operation. There is no new JSR package or
replacement release associated with this notice.

## Description

A port of <a href="https://npmjs.org/package/shallow-equal" target="_blank">shallow-equal</a> to Deno.

If you know you have two arrays or two objects in hand, and you want to know if they are shallowly equal or not, this library is for you.

<a href="https://deno.land/x/shallow_equal" target="_blank">shallow-equal on Deno.land</a>

## Features

- Super light
- No dependencies
- Thoroughly tested

## Usage

```js
import { shallowEqualArrays } from "https://denopkg.com/marcelsud/deno-shallow-equal/mod.ts";

shallowEqualArrays([1, 2, 3], [1, 2, 3]); // => true
shallowEqualArrays([{ a: 5 }], [{ a: 5 }]); // => false
```

```js
import { shallowEqualObjects } from "https://denopkg.com/marcelsud/deno-shallow-equal/mod.ts";

shallowEqualObjects({ a: 5, b: "abc" }, { a: 5, b: "abc" }); // => true
shallowEqualObjects({ a: 5, b: {} }, { a: 5, b: {} }); // => false
```

## License

<a href="http://moroshko.mit-license.org" target="_blank">MIT</a>

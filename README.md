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
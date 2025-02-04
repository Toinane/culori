---
title: Home
layout: layouts/default
menu-order: 0
---

[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors
[din99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[hex-colors]: https://drafts.csswg.org/css-color/#hex-notation
[rgb-colors]: https://drafts.csswg.org/css-color/#rgb-functions
[hsl-colors]: https://drafts.csswg.org/css-color/#the-hsl-notation
[hwb-colors]: https://drafts.csswg.org/css-color/#the-hwb-notation
[lab-colors]: https://drafts.csswg.org/css-color/#lab-colors

Culori is a color library for JavaScript that supports most color spaces and formats defined in the [CSS Colors Level 4][css4-colors] specification ([named colors][css4-named-colors], [hex colors][hex-colors] with 3 to 8 digits, [RGB][rgb-colors], [HSL][hsl-colors], [HWB][hwb-colors], [Lab and LCh][lab-colors]), plus [additional color spaces](./color-spaces).

It handles [color differences](https://en.wikipedia.org/wiki/Color_difference), interpolation, gradients, blend modes [and more](./api).

```bash
npm install culori
```

<a class='btn-link' href='./getting-started'>Get started</a>

## What sets Culori apart?

__A function-oriented API.__ Colors are represented as plain JavaScript objects you pass through a series of [functions](./api), which makes it super easy to extend.

__Accurate alpha.__ On the `alpha` channel, the library doesn't equate an `undefined` value with an opaque color, but rather with a color for which we don't care about the opacity. This gives you the opportunity to interpret `undefined` as you see fit. The hex string <kbd>#ff0000</kbd> _should_ probably be rendered as fully opaque red, but for running functions on colors it's useful to discern <kbd>#ff0000</kbd> from <kbd>#ff0000ff</kbd> — the former has an implicit alpha of 1, while for the latter it's explicit.

__Comprehensive functionality.__ Build advanced color tools with Culori's rich collection of color spaces and functions.

__Tree-shakeable version available.__ When you're ready to optimize for bundle size, switch to [a tree-shakeable version of the library](./guides/tree-shaking).

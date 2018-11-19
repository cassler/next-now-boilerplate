## Next-Now Boilerplate

This package is simply a NextJS app with some oppinionated defaults. So, what
does it do out of the box? Glad you asked:

#### Linting and such
- airbnb babel presets
- prettier settings

#### NextJS Configs
- custom `_document.js` and `_app.js` files.
- preload a bit of fun stuff with normalize: `/static/global.css`
- Pre-configured `now.json` and `next.config.js`
- dead simple `./pages/index.js`
- dead simple navigation using `next/link`
- custom app `header` and `meta` for server side rendering

#### Styled-Components
- Styled-Components is set up by default with a system font stack.
- Server Side rendering of global styles.
- ThemeProvider suppoer: use context to pass theme styles props to all components.
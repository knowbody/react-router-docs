# `match({ routes, location, [history], ...options }, cb)`

This function is to be used for server-side rendering. It matches a set of routes to a location, without rendering, and calls a `callback(error, redirectLocation, renderProps)` when it's done.

The function will create a `history` for you, passing the additional `options` along to create it. These options can include `basename` to control the base name for URLs, as well as the pair of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing. You can also pass in an already instantiated `history` object, which can be constructed however you like.

The three arguments to the callback function you pass to `match` are:

### `error`
A Javascript `Error` object if an error occurred, `undefined` otherwise.

### `redirectLocation`
A Location object if the route is a redirect, `undefined` otherwise.

### `renderProps`
The props you should pass to the routing context if the route matched, `undefined` otherwise.

---

If all three parameters are `undefined`, this means that there was no route found matching the given location.

**Note**: *You probably don't want to use this in a browser unless you're doing server-side rendering of async routes.*

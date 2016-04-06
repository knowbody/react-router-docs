# `<RouterContext>`
A `<RouterContext>` renders the component tree for a given router state. Its used by `<Router>` but also useful for server rendering and integrating in brownfield development.

It also provides a `router` object on `context`.

## `context.router`

Contains data and methods relevant to routing. Most useful for imperatively transitioning around the application.

### `push(pathOrLoc)`
Transitions to a new URL, adding a new entry in the browser history.

```jsx
router.push('/users/12')

// or with a location descriptor object
router.push({
  pathname: '/users/12',
  query: { modal: true },
  state: { fromDashboard: true }
})
```

### `replace(pathOrLoc)`
Identical to `push` except replaces the current history entry with a new one.

### `go(n)`
Go forward or backward in the history by `n` or `-n`.

### `goBack()`
Go back one entry in the history.

### `goForward()`
Go forward one entry in the history.

### `createPath(pathOrLoc, query)`
Stringifies the query into the pathname, using the router's config.

### `createHref(pathOrLoc, query)`
Creates a URL, using the router's config. For example, it will add `#/` in front of the `pathname` for hash history.

### `isActive(pathOrLoc, indexOnly)`
Returns `true` or `false` depending on if the `pathOrLoc` is active. Will be true for every route in the route branch matched (child route is active, therefore parent is too), unless `indexOnly` is specified, in which case it will only match the exact path.

A route is only considered active if all the URL parameters match, including optional parameters and their presence or absence.

However, only explicitly specified query parameters will be checked. That means that:

```js
isActive({ pathname: '/foo', query: { a: 'b' } })
```

will return `true` when the location is `/foo?a=b&c=d`. To require that a query parameter be absent, specify its value as an explicit `undefined`, i.e.

```js
isActive({ pathname: '/foo', query: { a: 'b', c: undefined } })
```

which would be `false` in this example.

# `<Router>`

Primary component of React Router. It keeps your UI and the URL in sync.

## Props
### `children` (required)
One or many `<Route />` or `PlainRoute`. When the history changes, `<Router>` will match a branch of its routes, and render their configured components, with child route components nested inside the parents.

### `routes`
Alias for `children`.

### `history`
The history the router should listen to. Typically `browserHistory` or `hashHistory`.

```jsx
import { browserHistory } from 'react-router'
ReactDOM.render(<Router history={browserHistory} />, el)
```

### `createElement(Component, props)`
When the router is ready to render a branch of route components, it will use this function to create the elements. You may want to take control of creating the elements when you're using some sort of data abstraction, like setting up subscriptions to stores, or passing in some sort of application module to each component via props.

```jsx
<Router createElement={createElement} />

// default behavior
function createElement(Component, props) {
  // make sure you pass all the props in!
  return <Component {...props} />
}

// maybe you're using something like Relay
function createElement(Component, props) {
  // make sure you pass all the props in!
  return <RelayContainer Component={Component} routerProps={props} />
}
```

### `stringifyQuery(queryObject)`
A function used to convert an object from `<Link />` or calls to
`transitionTo` to a URL query string.

### `parseQueryString(queryString)`
A function used to convert a query string into an object that gets passed to route component props.

### `onError(error)`
While the router is matching, errors may bubble up, here is your opportunity to catch and deal with them. Typically these will come from async features like `route.getComponents`, `route.getIndexRoute`, and `route.getChildRoutes`.

### `onUpdate()`
Called whenever the router updates its state in response to URL changes.

### `render(props)`
This is primarily for integrating with other libraries that need to participate in rendering before the route components are rendered. It defaults to:

```jsx
render={(props) => <RouterContext {...props} />}
```

Ensure that you render a `<RouterContext>` at the end of the line, passing all the props passed to `render`.


## Examples
Todo

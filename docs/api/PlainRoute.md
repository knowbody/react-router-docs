# Plain Route

A plain JavaScript object route definition. `<Router>` turns JSX `<Route>`s into these objects, but you can use them directly if you prefer. All of the props are the same as `<Route>` props, except those listed here.

## Props
### `childRoutes`
An array of child routes, same as `children` in JSX route configs.

### `getChildRoutes(location, callback)`
Same as `childRoutes` but asynchronous and receives the `location`. Useful for code-splitting and dynamic route matching (given some state or session data to return a different set of child routes).

#### `callback` signature
`cb(err, routesArray)`

```jsx
let myRoute = {
  path: 'course/:courseId',
  childRoutes: [
    announcementsRoute,
    gradesRoute,
    assignmentsRoute
  ]
}

// async child routes
let myRoute = {
  path: 'course/:courseId',
  getChildRoutes(location, cb) {
    // do asynchronous stuff to find the child routes
    cb(null, [ announcementsRoute, gradesRoute, assignmentsRoute ])
  }
}

// navigation dependent child routes
// can link with some state
<Link to="/picture/123" state={{ fromDashboard: true }} />

let myRoute = {
  path: 'picture/:id',
  getChildRoutes(location, cb) {
    let { state } = location

    if (state && state.fromDashboard) {
      cb(null, [dashboardPictureRoute])
    } else {
      cb(null, [pictureRoute])
    }
  }
}
```

### `indexRoute`
This is the same as specifying an `<IndexRoute>` child when using JSX route configs.

### `getIndexRoute(location, callback)`

Same as `indexRoute`, but asynchronous and receives the `location`. As with `getChildRoutes`, this can be useful for code-splitting and dynamic route matching.

#### `callback` signature
`cb(err, route)`

```jsx
// For example:
let myIndexRoute = {
  component: MyIndex
}

let myRoute = {
  path: 'courses',
  indexRoute: myIndexRoute
}

// async index route
let myRoute = {
  path: 'courses',
  getIndexRoute(location, cb) {
    // do something async here
    cb(null, myIndexRoute)
  }
}
```

# `<Route>`
A `<Route>` is used to declaratively map routes to your application's component hierarchy.

## Props
### `path`
The path used in the URL.

It will concat with the parent route's path unless it starts with `/`,
making it an absolute path.

**Note**: Absolute paths may not be used in route config that is dynamically loaded.

If left undefined, the router will try to match the child routes.

### `component`
A single component to be rendered when the route matches the URL. It can
be rendered by the parent route component with `this.props.children`.

```jsx
const routes = (
  <Route component={App}>
    <Route path="groups" component={Groups} />
    <Route path="users" component={Users} />
  </Route>
)

class App extends React.Component {
  render () {
    return (
      <div>
        {/* this will be either <Users> or <Groups> */}
        {this.props.children}
      </div>
    )
  }
}
```

### `components`
Routes can define one or more named components as an object of `[name]: component` pairs to be rendered when the path matches the URL. They can be rendered by the parent route component with `this.props[name]`.

```jsx
// Think of it outside the context of the router - if you had pluggable
// portions of your `render`, you might do it like this:
// <App main={<Users />} sidebar={<UsersSidebar />} />

const routes = (
  <Route component={App}>
    <Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}} />
    <Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
      <Route path="users/:userId" component={Profile} />
    </Route>
  </Route>
)

class App extends React.Component {
  render () {
    const { main, sidebar } = this.props
    return (
      <div>
        <div className="Main">
          {main}
        </div>
        <div className="Sidebar">
          {sidebar}
        </div>
      </div>
    )
  }
}

class Users extends React.Component {
  render () {
    return (
      <div>
        {/* if at "/users/123" `children` will be <Profile> */}
        {/* UsersSidebar will also get <Profile> as this.props.children,
            so its a little weird, but you can decide which one wants
            to continue with the nesting */}
        {this.props.children}
      </div>
    )
  }
}
```

### `getComponent(location, callback)`
Same as `component` but asynchronous, useful for
code-splitting.

#### `callback` signature
`cb(err, component)`

```jsx
<Route path="courses/:courseId" getComponent={(location, cb) => {
  // do asynchronous stuff to find the components
  cb(null, Course)
}} />
```

### `getComponents(location, callback)`
Same as `components` but asynchronous, useful for
code-splitting.

#### `callback` signature
`cb(err, components)`

```jsx
<Route path="courses/:courseId" getComponents={(location, cb) => {
  // do asynchronous stuff to find the components
  cb(null, {sidebar: CourseSidebar, content: Course})
}} />
```

### `children`
Routes can be nested, `this.props.children` will contain the element created from the child route component. Please refer to the `Route Configuration` since this is a very critical part of the router's design.

### `onEnter(nextState, replace, callback?)`
Called when a route is about to be entered. It provides the next router state and a function to redirect to another path. `this` will be the route instance that triggered the hook.

If `callback` is listed as a 3rd argument, this hook will run asynchronously, and the transition will block until `callback` is called.

### `onChange(prevState, nextState, replace, callback?)`
Called on routes when the location changes, but the route itself neither enters or leaves. For example, this will be called when a route's children change, or when the location query changes. It provides the previous router state, the next router state, and a function to redirect to another path. `this` will be the route instance that triggered the hook.

If `callback` is listed as a 4th argument, this hook will run asynchronously, and the transition will block until `callback` is called.

### `onLeave()`
Called when a route is about to be exited.

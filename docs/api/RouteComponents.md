# Route Components
A route's component is rendered when that route matches the URL. The router will inject the following properties into your component when it's rendered:

## Injected Props

### `history` (deprecated)

### `location`
The current [location](https://github.com/reactjs/history/blob/master/docs/Location.md).

### `params`
The dynamic segments of the URL.

### `route`
The route that rendered this component.

### `routeParams`
A subset of `this.props.params` that were directly specified in this component's route. For example, if the route's path is `users/:userId` and the URL is `/users/123/portfolios/345` then `this.props.routeParams` will be `{userId: '123'}`, and `this.props.params` will be `{userId: '123', portfolioId: 345}`.

### `children`
The matched child route element to be rendered. If the route has named components then this will be undefined, and the components will instead be available as direct properties on `this.props`.

#### Example
```jsx
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="groups" component={Groups} />
      <Route path="users" component={Users} />
    </Route>
  </Router>
), node)

class App extends React.Component {
  render() {
    return (
      <div>
        {/* this will be either <Users> or <Groups> */}
        {this.props.children}
      </div>
    )
  }
}
```

## Named Components
When a route has one or more named components, the child elements are available by name on `this.props`. In this case `this.props.children` will be undefined. All route components can participate in the nesting.

### Example
```jsx
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}} />
      <Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
        <Route path="users/:userId" component={Profile} />
      </Route>
    </Route>
  </Router>
), node)

class App extends React.Component {
  render() {
    // the matched child route components become props in the parent
    return (
      <div>
        <div className="Main">
          {/* this will either be <Groups> or <Users> */}
          {this.props.main}
        </div>
        <div className="Sidebar">
          {/* this will either be <GroupsSidebar> or <UsersSidebar> */}
          {this.props.sidebar}
        </div>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    return (
      <div>
        {/* if at "/users/123" this will be <Profile> */}
        {/* UsersSidebar will also get <Profile> as this.props.children.
            You can pick where it renders */}
        {this.props.children}
      </div>
    )
  }
}
```

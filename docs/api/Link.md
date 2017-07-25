# `<Link>`
The primary way to allow users to navigate around your application. `<Link>` will render a fully accessible anchor tag with the proper href.

A `<Link>` can know when the route it links to is active and automatically apply an `activeClassName` and/or `activeStyle` when given either prop. The `<Link>` will be active if the current route is either the linked route or any descendant of the linked route. To have the link be active only on the exact linked route, use `<IndexLink>` instead or set the `onlyActiveOnIndex` prop.

## Props
### `to`
A [location descriptor](https://github.com/mjackson/history/blob/master/docs/Glossary.md#locationdescriptor). Usually this is a string or an object, with the following semantics:

* If it's a string it represents the absolute path to link to, e.g. `/users/123` (relative paths are not supported).
* If it's an object it can have four keys:
  * `pathname`: A string representing the path to link to.
  * `query`: An object of key:value pairs to be stringified.
  * `hash`: A hash to put in the URL, e.g. `#a-hash`.
  * `state`: State to persist to the `location`.

### `query` **([Deprecated](https://github.com/ReactTraining/react-router/blob/v3/upgrade-guides/v2.0.0.md#link-to-onenter-and-isactive-use-location-descriptors) see `to`)**
An object of key:value pairs to be stringified.

### `hash` **([Deprecated](https://github.com/ReactTraining/react-router/blob/v3/upgrade-guides/v2.0.0.md#link-to-onenter-and-isactive-use-location-descriptors) see `to`)**
A hash to put in the URL, e.g. `#a-hash`.

_Note: React Router currently does not manage scroll position, and will not scroll to the element corresponding to the hash. Scroll position management utilities are available in the [scroll-behavior](https://github.com/taion/scroll-behavior) library._

### `state` **([Deprecated](https://github.com/ReactTraining/react-router/blob/v3/upgrade-guides/v2.0.0.md#link-to-onenter-and-isactive-use-location-descriptors) see `to`)**
State to persist to the `location`.

### `activeClassName`
The className a `<Link>` receives when its route is active. No active class by default.

### `activeStyle`
The styles to apply to the link element when its route is active.

### `onClick(e)`
A custom handler for the click event. Works just like a handler on an `<a>` tag - calling `e.preventDefault()` will prevent the transition from firing, while `e.stopPropagation()` will prevent the event from bubbling.

### `onlyActiveOnIndex`
If `true`, the `<Link>` will only be active when the current route exactly matches the linked route.

### *others*
You can also pass props you'd like to be on the `<a>` such as a `title`, `id`, `className`, etc.
More: https://developer.mozilla.org/en/docs/Web/HTML/Element/a

## Example
Given a route like `<Route path="/users/:userId" />`:

```jsx
<Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>
// becomes one of these depending on your History and if the route is
// active
<a href="/users/123" class="active">Michael</a>
<a href="#/users/123">Michael</a>

// change the activeClassName
<Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link>

// change style when link is active
<Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Users</Link>
```

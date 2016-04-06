# `<Redirect>`
A `<Redirect>` sets up a redirect to another route in your application to maintain old URLs.

## Props
### `from`
The path you want to redirect from, including dynamic segments.

### `to`
The path you want to redirect to.

### `query`
By default, the query parameters will just pass through but you can specify them if you need to.

```jsx
// Say we want to change from `/profile/123` to `/about/123`
// and redirect `/get-in-touch` to `/contact`
<Route component={App}>
  <Route path="about/:userId" component={UserProfile} />
  {/* /profile/123 -> /about/123 */}
  <Redirect from="profile/:userId" to="about/:userId" />
</Route>
```

Note that the `<Redirect>` can be placed anywhere in the route hierarchy, though normal precedence rules apply. If you'd prefer the redirects to be next to their respective routes, the `from` path will match the same as a regular route `path`.

```jsx
<Route path="course/:courseId">
  <Route path="dashboard" />
  {/* /course/123/home -> /course/123/dashboard */}
  <Redirect from="home" to="dashboard" />
</Route>
```

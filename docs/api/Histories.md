# Histories

**Todo: add more**

## `browserHistory`
`browserHistory` uses the HTML5 History API when available, and falls back to full refreshes otherwise. `browserHistory` requires additional configuration on the server side to serve up URLs, but is the generally preferred solution for modern web pages.


## `hashHistory`
`hashHistory` uses URL hashes, along with a query key to keep track of state. `hashHistory` requires no additional server configuration, but is generally less preferred than `browserHistory`.


## `createMemoryHistory(options)`
`createMemoryHistory` creates an in-memory `history` object that does not interact with the browser URL. This is useful when you need to customize the `history` used for server-side rendering, as well as for automated testing.


## `useRouterHistory(createHistory)`
`useRouterHistory` is a `history` enhancer that configures a given `createHistory` factory to work with React Router. This allows using custom histories in addition to the bundled singleton histories.

It also pre-enhances the history with the
[useQueries](https://github.com/mjackson/history/blob/master/docs/QuerySupport.md)
and
[useBasename](https://github.com/mjackson/history/blob/master/docs/BasenameSupport.md)
enhancers from `history`

## Example
```jsx
import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })
```

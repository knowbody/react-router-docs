# Client side "404 not found"

To create a client side "404 not found" fallback all you need to do is make use of a `<Route />` component
with a non-greedy matching path.

Create your `NotFound` component, i.e. the page which will display 404 error message:

```jsx
// components/NotFound.js
import React from 'react';

const NotFound = () =>
  <div>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

export default NotFound;
```

Let's add `<NotFound />` component to routes configuration, using `*` as a value of the `path` parameter
to get a non-greedy matching.

It is important to remember that the 404 route **needs to be declared
in the very bottom of your routes configuration**, so the `<Route />` is only mounted if any of the
routes' path declared above are not matched:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      {/* Your other routes here */}

      <Route path="*" component={NotFound} />
    </Route>
  </Router>

render(<Root />, document.getElementById('root'));
```

See the live example below, try to enter some non valid url to see 404 page:

[source code](https://jsfiddle.net/knowbody/35bve12w/)

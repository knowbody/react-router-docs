# Client side "404 not found"

To create a client side "404 not found" fallback all you need to do is make use of a `<Redirect />` component.
Assuming that your application has the routes declared, first of all import a `Redirect` component:

```jsx
import { Redirect } from 'react-router';
```

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

Add the created `NotFound` to your routes configuration, together with a `Redirect` component.
Make sure that the 404 redirect is declared in the very bottom of the routes configuration,
so it is called only if the other routes path will not get matched.

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      {/* Your other routes here */}

      <Route path="404" component={NotFound} />
      <Redirect from="*" to="404" />
    </Route>
  </Router>

render(<Root />, document.getElementById('root'));
```

See the live example below, try to enter some non valid url to see 404 page:

[source code](https://jsfiddle.net/knowbody/ayvd71j6/)

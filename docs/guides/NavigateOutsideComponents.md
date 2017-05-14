# Navigate Outside of Components

You are probably familiar with navigating around your app with use of `<Link />`.
This is very easy and useful, but what if you are trying to navigate outside of the React's
`render` method?

React Router provides a few ways of accomplishing it.

## 1. Using `this.props.history`

If you are trying to do it in the Route component (in short, *it's a component which is defined in your routes configuration*)
then you could take `history` object off of the `props` and then use `history`'s `push` method to
navigate to the path you want.

```jsx
// components/Home.js
import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/about');
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <button onClick={this.handleClick}>
          Navigate outside of component to About page
        </button>
      </div>
    );
  }
}
```

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home';

const Root = () =>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      {/* other routes */}
    </Route>
  <Router>

render(<Root />, document.getElementById('root'));
```

[source code](https://jsfiddle.net/knowbody/pmkqLvmc/2/)



## 2. Using history that app gives to the `<Router />`

```jsx
// your main file that renders a Router
import { Router, browserHistory } from 'react-router';
import routes from './app/routes';

render(<Router history={browserHistory} routes={routes}/>, el);
```

```jsx
// somewhere like a redux/flux action file:
import { browserHistory } from 'react-router'
browserHistory.push('/some/path')
```


## 3. Using `this.context.router`

If your route is not a Route component you can't grab `history` object from `props`.
Instead, let's take a `router` object off of the [`context`](https://facebook.github.io/react/docs/context.html).

*`router` object has a `push` method which is needed for navigation.*

The only way to get access to `context` is by defining it in the `contextTypes`, or else `this.context`
will be an empty object.

```jsx
import React, { Component, PropTypes } from 'react';

class MyComponent extends Component {
  // ...
}

MyComponent.contextTypes = {
  router: PropTypes.object.isRequired
};
```

Once the `context` is available for our component, we can use `router`'s `push` method to navigate
to the defined path.

```jsx
import React, { Component, PropTypes } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.context.router.push('/about');
  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <button onClick={this.handleClick}>
          Navigate outside component to About page, using context
        </button>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};
```

[source code](https://jsfiddle.net/knowbody/ok3jbsym/)

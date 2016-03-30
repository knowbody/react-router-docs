import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, browserHistory } from 'react-router';


const Home = () => <h3 style={{ color: '#33CC66' }}>Home</h3>;

const About = () => <h3 style={{ color: '#33CC66' }}>About</h3>;

const Contact = () => <h3 style={{ color: '#33CC66' }}>Contact</h3>;

const Messages = () => <h4>Messages</h4>;

const SentMessages = () => <h4>Your sent messages</h4>;

const Inbox = ({ children }) => (
  <div>
    <h3 style={{ color: '#33CC66' }}>Inbox</h3>
    <ul>
      <li><Link to="/inbox">Inbox</Link></li>
      <li><Link to="/inbox/sent">Sent</Link></li>
      <li><Link to="/inbox/messages">My messages</Link></li>
    </ul>
    <div style={{ border: '10px solid red' }}>
      {children}
    </div>
  </div>
);

Inbox.propTypes = {
  children: PropTypes.object.isRequired,
};

const Navigation = (props, { router }) => {
  let inboxSubmenu = null;
  if (router.isActive('/inbox')) {
    inboxSubmenu = (
      <ul>
        <li><Link to="/inbox/sent">Sent</Link></li>
        <li><Link to="/inbox/messages">My messages</Link></li>
      </ul>
    );
  }

  return (
    <div style={{ border: '10px solid #7f00ff' }}>
      <h3 style={{ color: '#7f00ff' }}>Navigation</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
        { inboxSubmenu }
      </ul>
    </div>
  );
};

Navigation.contextTypes = {
  router: PropTypes.object.isRequired,
};

const App = ({ children }) => (
  <div style={{ border: '10px solid #0099CC' }}>
    <h1 style={{ color: '#0099CC' }}>App</h1>

    <Navigation />

    <div style={{ border: '10px solid #33CC66' }}>
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="inbox" component={Inbox}>
        <IndexRoute component={Messages} />
        <Route path="sent" component={SentMessages} />
        <Redirect from="messages" to="/inbox" />
      </Route>
    </Route>
  </Router>
);

export default Root;

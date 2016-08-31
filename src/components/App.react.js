import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <h1>Hello World <small>from a component</small></h1>
        <Link to="test">Test link</Link>
        { children }
      </div>
    );
  }
}

export default App;
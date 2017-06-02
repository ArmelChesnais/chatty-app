import React, {Component} from 'react';


class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <nav className="navbar" >
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="navbar-count">{this.props.userCount} users online</span>
      </nav>
    );
  }
}

export default NavBar;
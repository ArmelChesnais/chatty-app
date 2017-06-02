import React, {Component} from 'react';


class ChatBar extends Component {

  constructor(props) {
    super(props);
    console.log('constructed')
    this.defaultState = props
  }

  componentDidMount() {
    this.setState({
      username: this._nameFill(this.props.currentUser.name)
    })
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
      <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.defaultState.currentUser.name} onKeyPress={this._submitName} onChange={this._usernameChanged} />
          <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this._submitMessage} onChange={this._contentChanged} />
      </footer>
    );
  }

  _usernameChanged = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  _contentChanged = (e) => {
    // console.log('content changed')
    this.setState({
      content: e.target.value
    })
  }

  _submitMessage = (e) => {
    if(e.which === 13) {
      // console.log('submitting')
      this.state.type = 'postMessage'
      if ( this.state.username !== this.props.currentUser.name) { }
      let message = Object.assign({},this.state, {username: this._nameFill(this.props.currentUser.name)})
      this.props.addMessage(message)
      e.target.value = ''
      this.setState(this.defaultState)
    }
  }

  _submitName = (e) => {
    if(e.which === 13) {
      // console.log("submit name")
      this.state.username = this._nameFill(this.state.username)
      this.state.content = this._nameFill(this.props.currentUser.name) + " changed their name to " + this.state.username
      this.props.changeName(this.state)
      this.setState(this.defaultState)
    }
  }

  _nameFill = (name) => {
    if (name) {
      return name
    } else {
      return "Anonymous"
    }
  }


}
export default ChatBar;
import React, {Component} from 'react';

class Message extends Component {
  render() {
    let result
    let { message } = this.props
    console.log(this.props)
    if ( message.newName ){
      console.log('in system message')
      result = (
          <div className="message system">
            {message.username} changed their name to {message.newName}.
          </div>
        )
    } else {
      console.log('in message')
      result = (
          <div className="message">
            <span className="message-username">{ message.username }</span>
            <span className="message-content">{ message.content }</span>
          </div>
        )
    }
    return result;
  }
}

export default Message;
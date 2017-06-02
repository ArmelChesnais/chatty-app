import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");
    let result
    let { message } = this.props
    switch (message.type) {
      case "incomingNotification":
        return (
          <div className="message system">
            {message.content}
          </div>
        )
        break
      case "incomingMessage":
        return (
          <div className="message">
            <span className="message-username" style={{color: message.colour}}>{ message.username }</span>
            <span className="message-content" dangerouslySetInnerHTML={{__html: message.content}} ></span>
          </div>
        )
        break
      default:
        throw new Error("Unknown event type " + message.type);
    }
  }
}

export default Message;
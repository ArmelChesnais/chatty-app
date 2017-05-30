import React, {Component} from 'react';
import Message from './Message.jsx';

const messages = [
  {
    username: "Anonymous1",
    content: "I won't be impressed with technology until I can download food."
  },
  {
    username: "Anonymous1",
    newName: "nomnom"
  }
]

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        { messages.map(this.buildMessage) }
      </main>
    );
  }

  buildMessage = (message, i) => {
    return (
        <Message key={i} message={ message } />
      )
  }
}



export default MessageList;
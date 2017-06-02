import React, {Component} from 'react';
import Message from './Message.jsx';

// const messages = [
//   {
//     username: "Anonymous1",
//     content: "I won't be impressed with technology until I can download food."
//   },
//   {
//     username: "Anonymous1",
//     newName: "nomnom"
//   }
// ]

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    let { messages } = this.props;
    return (
      <main className="messages">
        { messages.map(this.buildMessage) }
      </main>
    );
  }

  buildMessage = (message) => {
    return (
        <Message key={ message.id } message={ message } />
      )
  }
}



export default MessageList;
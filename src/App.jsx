// App.jsx

import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

// const data = {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       id: 1,
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//     },
//     {
//       id: 2,
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
//     },
//     {
//       id: 2.5,
//       type: "System",
//       content: "Anonymous has changed their name to nomnom"
//     }
//   ]
// }

let nextId = 1;

// const appSocket = new WebSocket("ws://localhost:3001");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ''}, // user's current name
      messages: [], // messages coming from the server will be stored here as they arrive
      userCount: 0
    };
    // console.log('constructed App')
  }

  componentDidMount() {
    // console.log('App did mount')
    this.socket = new WebSocket("ws://localhost:3001")

    this.socket.onopen = function (event) {
      console.log('connected to server');
    }

    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);

      this.setState(prevState => {
        switch ( data.type ) {
          case "userCount":
            return {
              userCount: data.content
            }
            break
          default:
            const messages = prevState.messages

            messages.push(data)

            return {
              messages: messages
            }
        }
      })
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <NavBar userCount= {this.state.userCount} />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addMessage={this._addMessage} changeName={this._changeName} />
      </div>
    );
  }

  _addMessage = (message) => {
    message.type = "postMessage"
    this.socket.send(JSON.stringify(message))
  }

  _changeName = (message) => {
    this.setState({currentUser: {name: message.username} })
    if( message.username !== this.state.currentUser.name) {
      this.socket.send(JSON.stringify({type: "postNotification", content: message.content}))
    }
  }

}



export default App;
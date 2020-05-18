import React, {useEffect} from 'react';
import { Widget, addResponseMessage, toggleWidget, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App(props) {
    const {user, parent} = props;
  useEffect(() => {
    // if(parent === "mobile") {
    //     toggleWidget()
    //   }
    addResponseMessage(`Welcome to this awesome chat ${!!user && user.name }!`);
    return function cleanup() {
      toggleWidget()
    };
  }, [props]);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div key={!!user && user.name ? user.name : "123"} className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
        //   profileAvatar={logo}
          title={!!user && user.name ? user.name : "Chat title"}
          subtitle={`Last seen ${!!user && user.time ? user.time : "2 hours ago"}`}
          showCloseButton={parent === "mobile" ? false : true}
        />
     </div>
    );
  }

export default App;
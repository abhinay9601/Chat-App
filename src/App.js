import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';
const projectID = 'be733a30-560e-4f84-88e0-82c3658acee0';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
// import { ChatEngine } from "react-chat-engine";
// import "./App.css";
// import ChatFeed from "./components/ChatFeed";

// const App = () => {
//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="be733a30-560e-4f84-88e0-82c3658acee0"
//       userName="Abhinay Singh"
//       userSecret="abhinay"
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//     />
//   );
// };

// export default App;

import './App.css';
import {ChatEngine} from 'react-chat-engine';
import { ChatFeed } from './ChatFeed';
import Loginform from './Loginform'

const App = ()=>{
   if(localStorage.getItem('username')) return <Loginform/>
   return(
   <ChatEngine
      height='100vh'
      username={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectId='e2328fef-7c2c-4f5e-afc8-f75bd836126f'
      renderChatFeed={(props) =><ChatFeed{...props}/>}
   />
   );
};

export default App;
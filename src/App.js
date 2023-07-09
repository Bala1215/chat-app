import './App.css';
import {ChatEngine} from 'react-chat-engine';
import { ChatFeed } from './ChatFeed';

const App = ()=>{
   <ChatEngine
      height='100vh'
      username='Bala'
      userSecret='123'
      projectId='e2328fef-7c2c-4f5e-afc8-f75bd836126f'
      renderChatFeed={(props) =><ChatFeed{...props}/>}
   />
};

export default App;
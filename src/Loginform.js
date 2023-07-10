import { useState } from "react";
import axios from 'axios';

let projectID = 'e2328fef-7c2c-4f5e-afc8-f75bd836126f';

const Modal = ()=>{
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    const handleSubmit = async(e)=>{
        e.preventDefault();

        const auth = {'Project-ID':projectID,
                      'User-Name' :username,
                       'User-Secret':password}
        

        try{
            await axios.get('https://api/chatengine.io/chats',{headers:auth})

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload()
            setError('')
        }
        catch(error){
            setError('oops!')
        }
    }    
    
    return(
       <div className="wrapper">
         <div className="form">
            <h1 className="title">Chat App</h1>
            <form onSubmit={handleSubmit}>
              <input type='text' value={username}
                     onChange={(e)=>setUsername(e.target.value)}
                     className="input"
                     placeholder="Enter username"
                     required
             />
             <input type='text' value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     className="input"
                     placeholder="Enter password"
                     required
             />
             <div align='center'>
                <button type="submit" className="button">
                    <span>Start Chattting...</span>
                </button>
             </div>
            </form>
            <h1>{error}</h1>
         </div>
       </div>
    );
}

export default Modal;
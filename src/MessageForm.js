import { useState } from "react";

const MessageForm = ()=>{
    
    const [value,setValue] = useState('');

    return(
      <form className="message-form">
        <input
              className="message-input"
              placeholder="send a message..."
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}/>
      </form>
    );
}

export default MessageForm;
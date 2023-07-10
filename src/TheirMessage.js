const TheirMessage = ({lastMessage,message})=>{
   
   const isFirstMessageByUser = !lastMessage || lastMessage.sender.username ! == message.sender.username

   return(
    <div className="message-row">
        {isFirstMessageByUser && (
         <div
             className="message-avatar"
             style={
               {backgroundImage:message.sender && `url(${message.sender.avatar})`}}
         />
        )}       
        {message.attachments && message.attachments.length > 0 
        ?
         <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className="message-image"
                style={{float : 'right'}}   
         />
         :
         (
         <div className="message" style={{float:'right', marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
         {message.text}
         </div>
         )
        
    }
    </div>
   )
}

export default TheirMessage;
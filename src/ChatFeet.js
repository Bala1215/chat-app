import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'


const ChatFeed = (props)=>{
    //destructure the props
    const {chats,userName,activeChat,messages} = props;
    //if chats has value , then get activechat from "chats"
    const chat = chats && chats[activeChat];

    const renderMessages = ()=>{

    }

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">

                </div>
                {renderMessages()}
                <div style={{height:'100px'}}>
                    <div className="message-form-container">
                       <MessageForm {...props} chatId={activeChat}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ChatFeed;

import React from "react"
import style from './Dialogs.module.css'
import { DialogItem } from "./DialogsItem/DialogItem";
import { MessageItem } from "./Message/MessageItem";


export const Dialogs = (props) => {

    const dialogsElement = props.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} />)
    const messagesElement = props.messages.map(el => <MessageItem key={el.id} message={el.message} />)
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.SendMessage()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message" /></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import style from './Dialogs.module.css'

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div >
            <NavLink to={path} className={style.item}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export const Dialogs = (props) => {

    const state = props.store.getState().dialogsReducer
    const dialogsElement = state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} />)
    const messagesElement = state.messages.map(el => <MessageItem key={el.id} message={el.message} />)
    const newMessageBody = state.newMessageBody


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e) => {
        const body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
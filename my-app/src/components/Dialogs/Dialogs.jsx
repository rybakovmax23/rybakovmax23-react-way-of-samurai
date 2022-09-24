import React from "react"
import { NavLink } from "react-router-dom";
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

    let dialogsElement = props.state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name} />)
    let messagesElement = props.state.messages.map(el => <MessageItem key={el.id} message={el.message} />)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
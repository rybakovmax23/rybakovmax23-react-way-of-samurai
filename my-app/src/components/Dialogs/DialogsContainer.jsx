import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";


export const DialogsContainer = (props) => {
    
    const state = props.store.getState().dialogsReducer

    const SendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (<Dialogs
        dialogs={state.dialogs}
        messages={state.messages}
        newMessageBody={state.newMessageBody}
        SendMessage={SendMessage}
        updateNewMessageBody={updateNewMessageBody}

    />)
}
import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";


export const DialogsContainer = (props) => {
 return (<StoreContext.Consumer>
        {(store) => {
            const state = store.getState().dialogsReducer

            const SendMessage = () => {
                store.dispatch(sendMessageCreator())
            }
            const updateNewMessageBody = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs
                dialogs={state.dialogs}
                messages={state.messages}
                newMessageBody={state.newMessageBody}
                SendMessage={SendMessage}
                updateNewMessageBody={updateNewMessageBody}
            />
        }}

    </StoreContext.Consumer>)
}
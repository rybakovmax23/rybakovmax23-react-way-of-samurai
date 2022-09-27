import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageBody: state.dialogsReducer.newMessageBody,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
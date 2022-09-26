const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = {
        id: state.messages.length + 1,
        message: state.newMessageBody,
      };
      state.messages.push(body);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE };
  };
  
  export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
  };

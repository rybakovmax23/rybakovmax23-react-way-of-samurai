const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialStore = {
  dialogs: [
    { id: 1, name: "Max" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Anton" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Vasia" },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "yo" },
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = {
        id: state.messages.length + 1,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, body],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
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

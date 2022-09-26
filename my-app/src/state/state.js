import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";


export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi,how are you", likesCount: 14 },
        { id: 2, post: "Cool!!", likesCount: 23 },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {
    console.log(1);
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
  },
};




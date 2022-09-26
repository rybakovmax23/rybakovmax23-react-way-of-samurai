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
    },
  },
  _callSubscriber() {
    console.log(1);
  },
  getState() {
    return this._state;
  },
  addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      post: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: this._state.profilePage.posts.length + 1,
        post: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

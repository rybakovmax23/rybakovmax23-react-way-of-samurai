const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialStore = {
  posts: [
    { id: 1, post: "Hi,how are you", likesCount: 14 },
    { id: 2, post: "Cool!!", likesCount: 23 },
  ],
  newPostText: "",
};

export const profileReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        post: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newMessageBody: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

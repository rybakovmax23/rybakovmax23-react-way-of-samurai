import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import { StoreContext } from "../../../StoreContext";
import { MyPosts } from "./MyPosts";





export const MyPostsContainer = (props) => {
    return (<StoreContext.Consumer>
        {(store) => {
            const state = store.getState().profileReducer
            const addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            const onPostChange = (text) => {
                const action = updateNewPostActionCreator(text)
                store.dispatch(action)
            }
            return <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.posts}
                newPostText={state.newPostText} />
        }
        }
    </StoreContext.Consumer>)
}
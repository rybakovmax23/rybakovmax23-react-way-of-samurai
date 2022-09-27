import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";





export const MyPostsContainer = (props) => {
    const state = props.store.getState().profileReducer
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        const action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText} />)
}
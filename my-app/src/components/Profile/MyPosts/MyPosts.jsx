import React from "react";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../state/profile-reducer";
import profile from './MyPosts.module.css'
import { Post } from "./Post/Post";





export const MyPosts = (props) => {
    const pageInfo = props.store.getState().profilePage
    const postElement = pageInfo.posts.map(el => <Post key={el.id} message={el.post} likesCount={el.likesCount} />)
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (e) => {
        const text = e.target.value
        const action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div className={profile.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange} value={pageInfo.newPostText} name="new post" id="" cols="50" rows="5" />
                </div>
                <div>
                    <button onClick={addPost} className="send">send</button>
                </div>
            </div>
            <div className={profile.posts}>
                {postElement}
            </div>
        </div>
    )
}
import React from "react";
import profile from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
    const postElement = props.posts.map(el => <Post key={el.id} message={el.post} likesCount={el.likesCount} />)
    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' })
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        const action = { type: "UPDATE-NEW-POST-TEXT", newText: text }
        props.dispatch(action)
    }

    return (
        <div className={profile.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} name="new post" id="" cols="50" rows="5" />
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
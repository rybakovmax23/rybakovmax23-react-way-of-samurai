import React from "react";
import profile from './MyPosts.module.css'
import { Post } from "./Post/Post";





export const MyPosts = (props) => {
    const postElement = props.posts.map(el => <Post key={el.id} message={el.post} likesCount={el.likesCount} />)
    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e) => {
        const text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={profile.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} name="new post" id="" cols="50" rows="5" />
                </div>
                <div>
                    <button onClick={onAddPost} className="send">send</button>
                </div>
            </div>
            <div className={profile.posts}>
                {postElement}
            </div>
        </div>
    )
}
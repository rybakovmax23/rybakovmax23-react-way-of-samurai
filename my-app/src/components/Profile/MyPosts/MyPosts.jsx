import React from "react";
import profile from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  

    let postElement = props.post.map(el => <Post key={el.id} message={el.post} likesCount={el.likesCount} />)
    return (
        <div className={profile.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea name="new post" id="" cols="50" rows="5"></textarea>
                </div>
                <div>
                    <button className="send">send</button>
                </div>
            </div>
            <div className={profile.posts}>
                {postElement}
            </div>
        </div>
    )
}
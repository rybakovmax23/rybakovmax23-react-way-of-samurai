import React from "react";
import profile from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            Posts
            <div>
                <textarea name="new post" id="" cols="50" rows="5"></textarea>
                <button className="send">send</button>
            </div>
            <div className={profile.posts}>
                <Post message='Hi,how are you' likesCount='14'/>
                <Post message='Cool!!' likesCount='23'/>
            </div>
        </div>
    )
}
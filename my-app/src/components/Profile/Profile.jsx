import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import profile from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";



export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
        </div>
    )
}
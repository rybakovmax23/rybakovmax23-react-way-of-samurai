import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostContainer";
// import profile from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";



export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}
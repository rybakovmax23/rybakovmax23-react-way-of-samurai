import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import profile from './Profile.module.css'
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";



export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts store={props.store} />
        </div>
    )
}
import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import profile from './Profile.module.css'

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="pic"
                    className="picture"
                />
            </div>
            <div>
                ava_description
            </div>
            <MyPosts />
        </div>
    )
}
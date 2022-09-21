import React from "react";
import profile from'./Profile.module.css'

export const Profile = () => {
    return (
        <div className={profile.content}>
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
            <div>
                Posts
                <div>
                    New Posts
                </div>
                <div className={profile.posts}>
                    <div className={profile.item}>
                        post1
                    </div>
                    <div className={profile.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
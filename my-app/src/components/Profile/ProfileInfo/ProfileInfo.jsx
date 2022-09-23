import React from "react";
import profile from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className="profileInfo">
            <div>
                <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="pic"
                    className="picture"
                />
            </div>
            <div className={profile.descriptionBlock}>
                ava_description
            </div>
        </div>
    )
}
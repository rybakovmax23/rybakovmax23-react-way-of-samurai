import React from "react";
import style from './Post.module.css'

export const Post = (props) => {
    return (

                <div className={style.item}>
                    <img src="https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg" alt="ava" />
                    {props.message}
                    <div>
                        <span>likes {props.likesCount}</span>
                    </div>
                </div>

    )
}
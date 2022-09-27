import React from "react";
import style from './Users.module.css';

export const Users = (props) => {
    if (!props.users.length) {
        props.setUsers([{
            id: 1,
            followed: true,
            photoUrl: 'https://static1.personality-database.com/profile_images/5661d52ded3c4965841a1b79ebfbaa12.png',
            fullName: "Max Rybakov",
            status: "GREAT!!",
            location: { country: "Belarus", city: "Shklov" },
        },
        {
            id: 2,
            followed: false,
            photoUrl: 'https://static1.personality-database.com/profile_images/5661d52ded3c4965841a1b79ebfbaa12.png',
            fullName: "Max Rybakov",
            status: "GREAT!!",
            location: { country: "Belarus", city: "Shklov" },
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'https://static1.personality-database.com/profile_images/5661d52ded3c4965841a1b79ebfbaa12.png',
            fullName: "Max Rybakov",
            status: "GREAT!!",
            location: { country: "Belarus", city: "Shklov" },
        },])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id} className={style.userInfo}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="avatar" className={style.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </span>
                <span className={style.description}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)

            }
        </div>
    )
}
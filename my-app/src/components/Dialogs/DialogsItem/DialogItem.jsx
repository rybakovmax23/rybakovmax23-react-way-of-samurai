import { NavLink } from "react-router-dom";
import style from './DialogItem.module.css'

export const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div >
            <NavLink to={path} className={style.item}>{props.name}</NavLink>
        </div>
    )
}
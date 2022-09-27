import style from './MessageItem.module.css'

export const MessageItem = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
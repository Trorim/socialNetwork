import style from "./messageItem.module.css";

export const MessageItem = (props) => {
    return <div className={style.message}>{props.message}</div>;
};

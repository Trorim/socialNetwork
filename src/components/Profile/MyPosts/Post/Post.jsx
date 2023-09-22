import style from "./post.module.css";

export const Post = (props) => {
    return (
        <>
            <div className={style.item}>
                <div>{props.message}</div>
            </div>
            <div className={style.btns}>
                <button className={style.like}>like</button>
                <button className={style.like}>commit</button>
            </div>
        </>
    );
};

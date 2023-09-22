import style from "./myPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={style.list}>
            <Post message="Hello, guys" />
            <Post message='It"s my first post' />
            <Post message="WOW!!!" />
        </div>
    );
};

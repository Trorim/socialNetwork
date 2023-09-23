import style from "./myPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = ({ postsData }) => {
    const postsElements = postsData.map((post, id) => (
        <Post message={post.message} key={id} />
    ));

    return <div className={style.list}>{postsElements}</div>;
};

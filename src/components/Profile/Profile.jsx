import { MyPosts } from "./MyPosts/MyPosts";
import style from "./profile.module.css";

export const Profile = () => {
    return (
        <main className={style.main}>
            <img
                src="https://www.w3schools.com/css/img_5terre_wide.jpg"
                alt="background"
            />
            <div className={style.userInfo}>
                <div>
                    <img
                        className={style.userAvatar}
                        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                        alt="userAvatar"
                    />
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    vitae, ducimus similique necessitatibus vel magnam non
                    dolorum aliquam aperiam impedit provident molestiae eveniet
                    perspiciatis reprehenderit, aliquid atque consequuntur,
                    praesentium eaque.
                </div>
            </div>
            <MyPosts />
        </main>
    );
};

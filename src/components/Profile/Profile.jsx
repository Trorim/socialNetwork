import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import style from "./profile.module.css";

export const Profile = ({ postsData }) => {
    return (
        <main className={style.main}>
            <ProfileInfo
                imgBg="https://www.w3schools.com/css/img_5terre_wide.jpg"
                imgUser="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                userInfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            vitae, ducimus similique necessitatibus vel magnam non
            dolorum aliquam aperiam impedit provident molestiae eveniet
            perspiciatis reprehenderit, aliquid atque consequuntur,
            praesentium eaque."
            />

            <MyPosts postsData={postsData} />
        </main>
    );
};

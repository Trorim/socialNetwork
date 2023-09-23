import style from "./profileInfo.module.css";

export const ProfileInfo = (props) => {
    return (
        <>
            <img src={props.imgBg} alt="background" className={style.mainBg} />
            <div className={style.userInfo}>
                <div>
                    <img
                        className={style.userAvatar}
                        src={props.imgUser}
                        alt="imgUser"
                    />
                </div>
                <div>{props.userInfo}</div>
            </div>
        </>
    );
};

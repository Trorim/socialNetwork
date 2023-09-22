import style from "./header.module.css";

export const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                alt="logo"
            />
            <p>{props.title}</p>
        </header>
    );
};

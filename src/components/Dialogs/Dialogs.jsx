import style from "./dialogs.module.css";

import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";

export const Dialogs = ({ dialogsData, messageData }) => {
    const dialogsElements = dialogsData.map((dialog) => (
        <DialogItem userName={dialog.userName} id={dialog.id} />
    ));

    const messageElements = messageData.map((message, id) => (
        <MessageItem message={message.message} key={id} />
    ));

    return (
        <div className={style.dialogs}>
            <div>
                <ul className={style.dialogsItems}>{dialogsElements}</ul>
            </div>
            <div className={style.messages}>{messageElements}</div>
        </div>
    );
};

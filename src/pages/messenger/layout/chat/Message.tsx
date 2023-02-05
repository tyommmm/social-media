import React from 'react';
import Avatar from '../../../../components/avatar/Avatar';
import { auth } from '../../../../firebase';
import s from '../../Messenger.module.scss';

interface MessageType {
  message: any;
}

const Message: React.FC<MessageType> = ({ message }) => {
  return (
    <div
      className={s.message}
      style={{
        flexDirection: message.senderID === auth.currentUser?.uid ? 'row-reverse' : undefined,
      }}>
      <div className={s.avatar}>
        <Avatar id={message.senderID} />
      </div>
      <div className={s.content}>
        <span>{message.text}</span>
        {message.image && <img src={message.image} />}
      </div>
    </div>
  );
};

export default Message;

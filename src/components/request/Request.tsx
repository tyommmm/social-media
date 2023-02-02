import React from 'react';
import { auth } from '../../firebase';
import { useUserData } from '../../hooks/useUsers';
import { onAcceptFriend } from '../../utils/onAcceptFriend';
import Avatar from '../avatar/Avatar';
import s from './Request.module.scss';

interface RequestType {
  id: string;
}
const Request: React.FC<RequestType> = ({ id }) => {
  const { userData } = useUserData(id);
  // const [isRequestAccepted, setIsRequestAccepted] = React.useState(false);

  async function handleAccept() {
    await onAcceptFriend(auth.currentUser!.uid, id);
  }
  return (
    <div className={s.root}>
      <div className={s.request}>
        <div className={s.info}>
          <div className={s.avatar}>
            <Avatar id={userData?.id} />
          </div>
          <h4>
            Gago Dzya <span>wants to add you to friends</span>
          </h4>
        </div>
        <div className={s.actions}>
          <span className={s.accept} onClick={handleAccept}>
            Accept
          </span>
          <span className={s.decline}>Decline</span>
        </div>
      </div>
    </div>
  );
};

export default Request;

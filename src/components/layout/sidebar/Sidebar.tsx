import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faContactBook, faImage, faUser } from '@fortawesome/free-solid-svg-icons';
import s from './Sidebar.module.scss';
import { auth } from '../../../firebase';
import { useUserData } from '../../../hooks/useUsers';
import { Link } from 'react-router-dom';
import Avatar from '../../avatar/Avatar';

const pages = [
  {
    icon: faHome,
    title: 'Home',
  },
  {
    icon: faContactBook,
    title: 'Friends',
  },
  {
    icon: faImage,
    title: 'Photos',
  },
  {
    icon: faUser,
    title: 'Profile',
  },
];
const Sidebar: React.FC = () => {
  const userData = useUserData(auth.currentUser?.uid);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.currentUser}>
          <Link to="profile">
            <Avatar />
          </Link>
          <div className={s.userInfo}>
            <h4>{userData?.firstName + ' ' + userData?.lastName}</h4>
            <span>{'@' + userData?.username}</span>
          </div>
        </div>
        <div className={s.pages}>
          {pages.map((page, i) => {
            return (
              <div
                key={page.title + i}
                className={s.page}
                style={{ borderBottom: i === pages.length - 1 ? 'none' : '' }}>
                <FontAwesomeIcon icon={page.icon} />
                <span>{page.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

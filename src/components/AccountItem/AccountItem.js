import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ username, nickname, avatar, check }) {
    return (
        <li className={cx('search-item')}>
            <img
                src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3af03eb78f9e2548e5ab82075dd78c51~c5_100x100.jpeg?x-expires=1690707600&x-signature=hmEsaxKkPSfjlTU1Z7gd0pESSZg%3D'
                alt={username}
                className={cx('avatar')}
            ></img>
            <div className={cx('user-information')}>
                <div>
                    <span className={cx('nickname')}>{nickname}</span>
                    {check && <FontAwesomeIcon icon={faCircleCheck} className={cx('check-icon')}/>}
                </div>
                <p className={cx('name')}>{username}</p>
            </div>
        </li>
    );
}

export default AccountItem;

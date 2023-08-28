import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ username, nickname, avatar, check, key: itemKey }) {
    return (
        <Link to={`/@${nickname}`}>
            <li className={cx('search-item')}>
                <Image src={avatar} alt={username} className={cx('avatar')}></Image>
                <div className={cx('user-information')}>
                    <div>
                        <span className={cx('nickname')}>{nickname}</span>
                        {check && <FontAwesomeIcon icon={faCircleCheck} className={cx('check-icon')} />}
                    </div>
                    <p className={cx('name')}>{username}</p>
                </div>
            </li>
        </Link>
    );
}

AccountItem.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    nickname : PropTypes.string.isRequired,
    check : PropTypes.bool.isRequired
};

export default AccountItem;

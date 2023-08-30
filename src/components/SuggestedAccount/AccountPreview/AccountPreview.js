import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3e1404f4314db6355766c81ccda57c2b.jpeg?x-expires=1693450800&x-signature=5E8HHqrWdjwT6BCoeZRqfwk2rs8%3D"
                    className={cx('avatar')}
                    alt=""
                ></img>
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('preview-info')}>
                <p className={cx('nickname')}>
                    <strong>Béo</strong>
                    <FontAwesomeIcon className={cx('check-icon', 'check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('username')}>Phạm Thanh Duy</p>
            </div>
            <div className={cx('preview-statistical')}>
                <p className={cx('follow')}>
                    <strong>
                        <span className={cx('follow-quantity')}>6.7M</span>
                    </strong>
                    {` `}Followers
                </p>
                <p className={cx('like')}>
                    <strong>
                        <span className={cx('like-quantity')}>429.6M</span>
                    </strong>
                    {` `}Likes
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;

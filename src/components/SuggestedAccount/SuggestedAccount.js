import styles from './SuggestedAccount.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
const ojb = {
    username: 'Pham Thanh Duy',
    nickname: 'Duybeo',
    avatar: '#',
};

function SuggestedAccount({ heading }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>{heading}</p>
            <ul className={cx('account-list')}>
                <AccountItem
                    username="Pham Thanh Duy"
                    nickname="Béo"
                    avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3e1404f4314db6355766c81ccda57c2b.jpeg?x-expires=1693450800&x-signature=5E8HHqrWdjwT6BCoeZRqfwk2rs8%3D"
                    check
                />
                <AccountItem
                    username="Dương Ngọc Anh"
                    nickname="Nah"
                    avatar="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1692111600&x-signature=Wjj5Ohh22xz3XEDq6%2F%2FuzMpDPKk%3D"
                />
            </ul>
            <span className={cx('see-more')}>See more</span>
        </div>
    );
}

SuggestedAccount.propTypes = {
    heading: PropTypes.string,
};

export default SuggestedAccount;

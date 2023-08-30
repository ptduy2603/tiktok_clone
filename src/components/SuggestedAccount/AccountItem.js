import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccount.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

const renderReview = (attr) => {
    return (
        <div tabIndex="-1" {...attr}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
};

function AccountItem(account) {
    return (
        <Tippy offset={[-20 , 0]} interactive appendTo={document.body} placement="bottom" delay={[800, 0]} render={renderReview}>
            <li className={cx('account-item')}>
                <Link className={cx('account-item-link')}>
                    <img src={account.avatar} alt={account.username} className={cx('avatar')} />
                    <div className={cx('account-item-info')}>
                        <p className={'nickname'}>
                            <strong>{account.nickname}</strong>
                            {account.check && (
                                <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')}></FontAwesomeIcon>
                            )}
                        </p>
                        <p className={'username'}>{account.username}</p>
                    </div>
                </Link>
            </li>
        </Tippy>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};
export default AccountItem;

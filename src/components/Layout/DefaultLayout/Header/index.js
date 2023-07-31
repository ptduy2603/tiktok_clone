import { useEffect, useState } from 'react'; // react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem/';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    // states
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // load trang call API để lấy các kết quả được tìm kiếm và set lại cho mảng kết quả
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    // return JSX
    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                {/* Logo section */}
                <div className={cx('header__logo')}>
                    <Link to="/">
                        <img src={images.logo.default} alt="Tiktok"></img>
                    </Link>
                </div>

                {/* searchBox section */}
                <div className={cx('header__search')}>
                    <Tippy
                        visible={searchResult.length > 0}
                        interactive
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <ul className={cx('search-list')}>
                                        {/* render result list here */}
                                        <AccountItem username="Phạm Thanh Duy" nickname="diiibao" check />
                                        <AccountItem username="Phạm Thanh Duy" nickname="diiibao" />
                                        <AccountItem username="Phạm Thanh Duy" nickname="diiibao" check />
                                        <AccountItem username="Phạm Thanh Duy" nickname="diiibao" />
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input
                                type="text"
                                className={cx('header__search-input')}
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            ></input>
                            <button className={cx('btn-clear-input')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        </div>
                    </Tippy>

                    <button className={cx('btn-search', 'btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* options section */}
                <div className={cx('header__options')}>
                    <Link to="/upload">
                        <Button outline className={cx('btnUpload')}>
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                    </Link>
                    <Button primary>Login</Button>
                    <FontAwesomeIcon icon={faEllipsisVertical} className={cx('header__options-more')} />
                </div>
            </div>
        </header>
    );
}

export default Header;

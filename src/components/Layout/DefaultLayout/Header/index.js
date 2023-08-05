import { useEffect, useState } from 'react'; // react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faPlus,
    faEarthAsia,
    faCircleQuestion,
    faMoon,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem/';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const currentUser = true;

// all items will be showed at menu-options
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} className={cx('menu-icon')}></FontAwesomeIcon>,
        content: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    content: 'English',
                },

                {
                    type: 'language',
                    code: 'vi',
                    content: 'Vietnamese',
                },

                {
                    type: 'language',
                    code: 'jpy',
                    content: 'Japanese',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} className={cx('menu-icon')}></FontAwesomeIcon>,
        content: 'Feedback and help',
        link: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} className={cx('menu-icon')}></FontAwesomeIcon>,
        content: 'Keyboard shortcuts',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} className={cx('menu-icon')}></FontAwesomeIcon>,
        content: 'Night mode',
    },
];

function Header() {
    // states
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // load trang call API để lấy các kết quả được tìm kiếm và set lại cho mảng kết quả
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    // handler functions
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            content: 'View profile',
            link: '/profile',
        },

        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            content: 'Get coins',
            link: '/coin',
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            content: 'Setting',
            link: '/settings',
        },

        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            content: 'Log out',
            link: '/',
        },
    ];

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
                    <HeadlessTippy
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
                    </HeadlessTippy>

                    <button className={cx('btn-search', 'btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('header__options')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('option-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to="/upload">
                                <Button outline className={cx('btnUpload')}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <span>Upload</span>
                                </Button>
                            </Link>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3af03eb78f9e2548e5ab82075dd78c51~c5_100x100.jpeg?x-expires=1690707600&x-signature=hmEsaxKkPSfjlTU1Z7gd0pESSZg%3D"
                                className={cx('user-login-avatar')}
                                alt=""
                            ></img>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('header__options-more')} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

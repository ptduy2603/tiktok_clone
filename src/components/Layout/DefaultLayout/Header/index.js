import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faEarthAsia,
    faCircleQuestion,
    faMoon,
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
import 'tippy.js/dist/tippy.css';

import Search from '~/components/Search';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import config from '~/config';

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
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                {/* searchBox section */}
                <Search />

                {/* options section */}
                <div className={cx('header__options')}>
                    <Link to="/upload">
                        <Button outline className={cx('btnUpload')}>
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Upload</span>
                        </Button>
                    </Link>

                    {currentUser ? (
                        <>
                            <Link to="/messages">
                                <Tippy content="Messages" placement="bottom" delay={[0, 200]} offset={[0, -0.5]}>
                                    <button className={cx('btn-message')}>
                                        <MessageIcon width="26px" height="26px" />
                                    </button>
                                </Tippy>
                            </Link>

                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]} offset={[0, -2]}>
                                <button className={cx('btn-inbox')}>
                                    <InboxIcon />
                                    <span className={cx('inbox-count')}>20</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-login-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1692111600&x-signature=Wjj5Ohh22xz3XEDq6%2F%2FuzMpDPKk%3D"
                            ></Image>
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

import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to }) {
    const [active, setActive] = useState(false);
    return (
        <li className={cx('sidebar-menu-item')}>
            <NavLink
                to={to}
                className={(nav) => {
                    if (active !== nav.isActive) setActive(nav.isActive);
                    return cx('sidebar-menu-item-link', { active: nav.isActive });
                }}
            >
                {active ? <icon.active /> : <icon.default />}
                <span className={cx('sidebar-menu-item-title')}>{title}</span>
            </NavLink>
        </li>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;

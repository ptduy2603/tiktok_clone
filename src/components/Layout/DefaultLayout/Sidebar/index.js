import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import * as icons from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={{ default: icons.HomeIcon, active: icons.HomeActiveIcon }}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={{ default: icons.UserGroupIcon, active: icons.UserGroupActiveIcon }}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={{ default: icons.LiveIcon, active: icons.LiveActiveIcon }}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;

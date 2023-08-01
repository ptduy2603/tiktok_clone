import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const handleRenderItem = () => {
        return items.map((item, index) => <MenuItem item={item} key={index}></MenuItem>);
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0,800]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{handleRenderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

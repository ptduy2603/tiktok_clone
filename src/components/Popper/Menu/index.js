import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction }) {
    // states
    const [history, setHistory] = useState([{ data: items }]);

    // luôn render ra phần tử cuối mảng history
    const currentMenu = history[history.length - 1];

    // handler functions
    const handleBackMenu = () => {
        // khi nhấn back thì xóa phần tử cuối
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleRenderItem = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = item.children;
            return (
                <MenuItem
                    item={item}
                    onClick={() => {
                        if (isParent) {
                            // nếu có chứa menu con thì set lại State và re-render lại menu con
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // trường hợp options không chứa menu cấp 2 và là một option chức năng
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            placement="bottom-end"
            delay={[0, 600]}
            hideOnClick="false"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length >= 2 && <Header title={currentMenu.title} onBack={handleBackMenu}></Header>}
                        {handleRenderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory([{ data: items }]);
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

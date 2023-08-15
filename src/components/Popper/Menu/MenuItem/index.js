import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button to={item.link} leftIcon={item.icon} className={cx('menu-item')} onClick={onClick}>
            {item.content}
        </Button>
    );
}

export default MenuItem;

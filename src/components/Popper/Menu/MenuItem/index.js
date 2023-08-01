import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ item, key }) {
    return (
        <Button to={item.link} leftIcon={item.icon} key={key} className={cx('menu-item')}>
            {item.content}
        </Button>
    );
}

export default MenuItem;

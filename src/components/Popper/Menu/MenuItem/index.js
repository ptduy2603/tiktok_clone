import styles from '../Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button to={item.link} leftIcon={item.icon} className={cx('menu-item')} onClick={onClick}>
            {item.content}
        </Button>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {   
    return (
        <header className={cx('header')}>
            <button onClick={onBack} className={cx('header-back')}><FontAwesomeIcon icon={faAngleLeft} ></FontAwesomeIcon></button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;

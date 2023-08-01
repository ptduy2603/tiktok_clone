import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    primary,
    outline,
    size = cx('medium'),
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    disabled,
    className,
    icon,
    onClick,
    ...passProps
}) {
    // tạo button component đa năng với nhiều style khác nhau
    let Component = 'button';
    let props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Component = Link;
    } else {
        props.href = href;
        Component = 'a';
    }

    // remove event listeners when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        [size]: size,
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon}
            <span className={cx('content')}>{children}</span>
            {rightIcon}
        </Component>
    );
}

export default Button;

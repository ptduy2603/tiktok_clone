import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchService.js';
import AccountItem from '~/components/AccountItem/';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    // states
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchInput, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    //heandler functions
    const handleChangeInput = (e) => {
        // trước khi set phải kiểm tra và định dạng lại dữ liệu tìm kiếm theo đúng chuẩn
        setSearchInput(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchInput('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className={cx('header__search')}>
            <HeadlessTippy
                visible={searchResult.length > 0 && showResult}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <ul className={cx('search-list')}>
                                {/* render result list here */}
                                {searchResult.map((account) => (
                                    <AccountItem
                                        nickname={account.nickname}
                                        key={account.id}
                                        avatar={account.avatar}
                                        check={account.tick}
                                        username={account.full_name}
                                    ></AccountItem>
                                ))}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        className={cx('header__search-input')}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchInput}
                        onChange={handleChangeInput}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                    ></input>

                    {!!searchInput && !loading && (
                        <button className={cx('btn-clear-input')} onClick={handleClearSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                </div>
            </HeadlessTippy>

            <button className={cx('btn-search', 'btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;

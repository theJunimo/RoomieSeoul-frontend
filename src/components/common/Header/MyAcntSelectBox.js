import React, { useState } from 'react';
import styles from './MyAcntSelectBox.scss';
import classNames from 'classnames/bind';
import Navigation from 'components/common/Navigation';

const cx = classNames.bind('styles');

export default function MyAcntSelectBox() {
 
    function ItemList() {
        const items = ['로그아웃', '프로필 관리']

        return items.map((item, idx) => (
            <Navigation key = {idx}
                        theme = 'selectBox'
                        className = {cx('item')} 
                        to = {idx === 0? '/logout' : '/mypage/myprofile'}>
            {item}
            </Navigation>
            ))
        }

    return (
        <div className = {cx('listBox-outer')}>
            <div className = {cx('listBox')}>
                <ItemList />
            </div>
        </div>
    )

}
import React from 'react';
import {  Link } from "react-router-dom";
import s from './Navbar.module.sass'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__contacts}>
                <p>
                    Новокузнечный переулок 4/1
                </p>
                <p>
                    8 (812) 123-45-67
                </p>
            </div>
            <div className={s.navbar__containers}>
                <div className={s.navbar__container}>
                    <Link to="/" className={s.navbar__link}>Каталог</Link>
                </div>
                <div className={s.navbar__container}>
                    <Link to="/deliver" className={s.navbar__link}>Доставка</Link>
                </div>
                <div className={s.navbar__container}>
                    <Link to="/collection" className={s.navbar__link}>Коллекции</Link>
                </div>
                <div className={s.navbar__container}>
                    <Link to="/contacts" className={s.navbar__link}>Контакты</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
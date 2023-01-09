import React from 'react';
import s from './Footer.module.sass'
import youtubeLogo from "../../../assets/images/Youtube.svg"
import vkLogo from "../../../assets/images/VK.svg"
import facebookLogo from "../../../assets/images/Facebook.svg"

const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.navigationButtons}>
                    <button className={s.button}>Главная</button>
                    <button className={s.button}>Каталог</button>
                    <button className={s.button}>Поставщики</button>
                    <button className={s.button}>Коллекции</button>
                    <button className={s.button}>Дегустация</button>
                    <button className={s.button}>Коллекция 2020</button>
                    <button className={s.button}>Контакты</button>
                </div>
                <div className={s.bottomInfo}>
                    <div className={s.bottomInfo__item}>ВИННЫЙ БУТИК LE CORTE</div>
                    <div className={s.bottomInfo__item}>8 (812) 123-45-67</div>
                    <div className={s.bottomInfo__item}>
                        <div className={s.links}>
                            <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                                <img className={s.links__image}  src={youtubeLogo} alt="Youtube"></img>
                            </a>
                            <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                                <img className={s.links__image} src={vkLogo} alt="VK"></img>
                            </a>
                            <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
                                <img className={s.links__image} src={facebookLogo} alt="Facebook"></img>
                            </a>
                        </div>
                    </div>
                    <div className={s.bottomInfo__item}>© LE-CORTE.RU</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import s from './Main.module.sass'
import glass from '../../../assets/images/glassVine.png';
import photoOne from '../../../assets/images/photo1.png';
import photoTwo from '../../../assets/images/photo2.png';
import photoThree from '../../../assets/images/photo3.png';
import borderImageOne from '../../../assets/images/borderImage1.png';
import borderImageTwo from '../../../assets/images/borderImage2.png';

const Main = () => {
    return (
    <div>
        <div className={s.container}>
            <div className={s.content}>
                <button className={s.button}>ВИННАЯ КАРТА</button>
                <button className={s.button}>ДЕГУСТАЦИЯ</button>
            </div>
        </div>
        <div className={s.second_container}>
            <div className={s.second_container__content}>
                <p>Лучший вкус, это вкус долголетнего вина</p>
                <div className={s.second_container__content__line}/>
                <div className={s.second_container__content__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.</div>
                <img src={glass} alt="Бокал вина"/>
            </div>
        </div>
        <div className={s.third_container}>
            <div className={s.third_container__content}>
                <div className={s.third_container__textblock}>
                    <h5>Новинки коллекции</h5>
                    <h3>Март 1980 Урожай Марселя</h3>
                    <div className={s.third_container__textblock__line}/>
                    <p className={s.third_container__textblock__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    <table className={s.table}>
                        <tr className={s.row}>
                            <td className={s.cell}><p className={s.third_container__textblock__tableYear}>1980</p></td>
                            <td className={s.cell}>
                                <h4 className={s.third_container__textblock__tableTitle}>Colli Euganei Bianco Ca' Lustra 1980</h4>
                                <p className={s.third_container__textblock__tableYear}>Красочная бутылочка вина из Марселя</p>
                            </td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.cell}><p className={s.third_container__textblock__tableYear}>1980</p></td>
                            <td className={s.cell}>
                                <h4 className={s.third_container__textblock__tableTitle}>Colli Euganei Bianco Ca' Lustra 1980</h4>
                                <p className={s.third_container__textblock__tableYear}>Красочная бутылочка вина из Марселя</p>
                            </td>
                        </tr>
                        <tr className={s.row}>
                            <td className={s.cell}><p className={s.third_container__textblock__tableYear}>1980</p></td>
                            <td className={s.cell}>
                                <h4 className={s.third_container__textblock__tableTitle}>Colli Euganei Bianco Ca' Lustra 1980</h4>
                                <p className={s.third_container__textblock__tableYear}>Красочная бутылочка вина из Марселя</p>
                            </td>
                        </tr>
                    </table>
                    <p className={s.third_container__textblock__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. </p>
                    <button className={s.third_container__button}>УЗНАТЬ ПОДРОБНЕЕ</button>
                </div>
                <div className={s.third_container__photoblock}>
                    <div className={s.third_container__photoblock__box1}>
                        <img src={photoOne} alt={"First photo"}/>
                    </div>
                    <div><img src={photoTwo} alt={"Second photo"}/></div>
                    <div><img src={photoThree} alt={"Third photo"}/></div>
                </div>
            </div>
        </div>
        <div className={s.four_container}>
            <div className={s.four_container__content}>
                <div className={s.four_container__content__borderContent}>
                    <img src={borderImageOne} className={s.four_container__content__borderContent__imageOne}/>
                    <h2 className={s.four_container__content__borderContent__title}>Запись на дегустацию</h2>
                    <img src={borderImageTwo} className={s.four_container__content__borderContent__imageTwo}/>
                </div>
                <div className={s.four_container__content__line}/>
                <p className={s.four_container__content__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum. </p>
                <form>
                    <div className={s.form__inputline}>
                        <input type={"text"} id="name" name="name" className={s.text_input} placeholder="Имя"/>
                        <input type={"phone"} id="phone" name="phone" className={s.text_input} placeholder="Телефон"/>
                    </div>
                    <input type={"text"} id="adress" name="adress" className={s.text_input} placeholder="Бутик на Невском 103"/>
                    <input type="button" className={s.form_button} value={"ЗАПИСАТЬСЯ"}/>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Main;
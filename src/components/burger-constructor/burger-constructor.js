import {useState} from "react";

import {Tab, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";

import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
    const [current, setCurrent] = useState('one')
    // eslint-disable-next-line array-callback-return
    const buns = data.map(bun => {
        if (bun.type === 'bun') {
            return (
                <li key={bun._id} className={styles.item}>
                    <img className={styles.image} src={bun.image} alt={bun.name}/>
                    <div style={{display: "flex"}}>
                        <p className={'text text_type_digits-default pb-1 pr-2'}>{bun.price}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p style={{textAlign: "center"}} className={'text text_type_main-default'}>{bun.name}</p>
                </li>
            )
        }
    })
    // eslint-disable-next-line array-callback-return
    const sauces = data.map(sauce => {
        if (sauce.type === 'sauce') {
            return (
                <li key={sauce._id} className={styles.item}>
                    <img className={styles.image} src={sauce.image} alt={sauce.name}/>
                    <div style={{display: "flex"}}>
                        <p className={'text text_type_digits-default pb-1 pr-2'}>{sauce.price}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p style={{textAlign: "center"}} className={'text text_type_main-default'}>{sauce.name}</p>
                </li>
            )
        }
    })
    // eslint-disable-next-line array-callback-return
    const cutlets = data.map(cutlet => {
        if (cutlet.type === 'main') {
            return (
                <li key={cutlet._id} className={styles.item}>
                    <img className={styles.image} src={cutlet.image} alt={cutlet.name}/>
                    <div style={{display: "flex"}}>
                        <p className={'text text_type_digits-default pb-1 pr-2'}>{cutlet.price}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p style={{textAlign: "center"}} className={'text text_type_main-default'}>{cutlet.name}</p>
                </li>
            )
        }
    })
    return (
        <div className={styles.constructor}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={'mt-5'} style={{display: 'flex'}}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>
            <div className={styles.wrapper}>
                <h2 className={'text text_type_main-medium'}>Булки</h2>
                <ul className={styles.list}>
                    {buns}
                </ul>
                <h2 className={'text text_type_main-medium'}>Соусы</h2>
                <ul className={styles.list}>
                    {sauces}
                </ul>
                <h2 className={'text text_type_main-medium'}>Котлеты</h2>
                <ul className={styles.list}>
                    {cutlets}
                </ul>
            </div>
        </div>
    )
}

export default BurgerConstructor;
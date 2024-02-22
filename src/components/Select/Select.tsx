import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [value, setValue] = useState('none')
    const [active, setActive] = useState(false)

    const hoveredItem = props.items.find(i => i.value === value)

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const showHandler = () => {
        setActive(!active)
    }
    const onClickHandler = (title: string) => {
        setValue(title)
        setActive(!active)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === value) {
                     const pretedentElement = e.key === 'ArrowDown' ? props.items[i + 1] :  props.items[i - 1];
                    if (pretedentElement) {
                        props.onChange(pretedentElement.value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    return (
        <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <h3 onClick={showHandler}>{value}</h3>
            {active &&
                <div className={s.items}>
                    {props.items.map((item, index) => {
                        return (
                            <div key={index}
                                 onClick={() => {
                                     onClickHandler(item.title)
                                 }}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>}
        </div>
    );
};
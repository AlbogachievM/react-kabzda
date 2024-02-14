import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [value, setValue] = useState('none')
    const [choose, setChoose] = useState(false)
    const showHandler = () => {
        setChoose(!choose)
    }
    const onClickHandler = (title: string) => {
        setValue(title)
        setChoose(!choose)
    }
    return (
        <div>
            <div onClick={showHandler}>{value}</div>
            {choose ? props.items.map((item, index) => {
                return (
                    <div key={index}
                         onClick={() => {
                             onClickHandler(item.title)
                         }}>
                        {item.title}
                    </div>
                )
            }) : null}
        </div>
    );
};
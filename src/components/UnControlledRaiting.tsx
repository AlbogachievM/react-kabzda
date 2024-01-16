
import { useState } from 'react';


const UnControlledRaiting = () => {

    let [value, setValue] = useState(0)
    function onClickHandler(number: number) {
        setValue(number)
    }
    return (
        <div>
            <Star id={1} selected={value > 0} callback={onClickHandler} />
            <Star id={2} selected={value > 1} callback={onClickHandler} />
            <Star id={3} selected={value > 2} callback={onClickHandler} />
            <Star id={4} selected={value > 3} callback={onClickHandler} />
            <Star id={5} selected={value > 4} callback={onClickHandler} />
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    id: number
    callback: (number: number) => void
}
const Star = (props: StarPropsType) => {
    return (
        props.selected
            ?
            <span onClick={() => props.callback(props.id)}><b> star </b></span>
            :
            <span onClick={() => props.callback(props.id)}> star </span>
    )
}
export default UnControlledRaiting
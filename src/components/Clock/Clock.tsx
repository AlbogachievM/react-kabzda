import React, {FC, useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type ClockType = {
    mode?: 'analog' | 'digital'
}



export const Clock: FC<ClockType> = (props) => {
    const [date, setData] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, []);

    let view;
    switch (props.mode) {
        case 'digital': {
            view = <DigitalClockView date={date}/>
            break;
        }
        case 'analog':
        default:
            view = <AnalogClockView date={date}/>

    }

    return (
        <div>
            {view}
        </div>
    );
};

export type ClockViewPropsType = {
    date: Date
}



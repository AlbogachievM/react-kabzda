import React, {FC, useEffect, useState} from 'react';

type ClockType = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num


export const Clock: FC<ClockType> = () => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, []);


    return (
        <div>
            <span>{get2digitsString(data.getHours())}</span>
            :
            <span>{get2digitsString(data.getMinutes())}</span>
            :
            <span>{get2digitsString(data.getSeconds())}</span>
        </div>
    );
};

import React, { useState } from 'react';

type PropsType = {
    // on: boolean
}


export function OnOff(props: PropsType) {
    
    let [on, setOn] = useState(false)

    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const IndicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => { setOn(true) }} style={onStyle}>On</div>
            <div onClick={() => { setOn(false) }} style={offStyle}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};
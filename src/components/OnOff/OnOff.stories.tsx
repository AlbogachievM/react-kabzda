import React, { useState } from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOff(props: PropsType) {


    const onStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        display: 'inline-block',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const IndicatorStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => { props.onChange(true) }} style={onStyle}>On</div>
            <div onClick={() => { props.onChange(false) }} style={offStyle}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};
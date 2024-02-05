import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {UnControlledOnOff} from "./UnControlledOnOff";


export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const callback = action('on or off clicked')
export const OnModeUnControlled = () => <UnControlledOnOff onChanged={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <UnControlledOnOff onChanged={setValue}/>
}
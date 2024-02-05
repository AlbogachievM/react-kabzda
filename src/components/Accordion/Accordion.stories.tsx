import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true}
                                                  setAccordionCollapsed={callback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false}
                                                     setAccordionCollapsed={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={'Menu'} collapsed={value} setAccordionCollapsed={() => setValue(!value)}/>
}
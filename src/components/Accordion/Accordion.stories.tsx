import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')
export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'} collapsed={true}
    setAccordionCollapsed={callback}
    onClick={onClickCallback}
    items={[]}/>

export const UsersUnCollapsedMode = () => <Accordion
    titleValue={'Menu'} collapsed={false}
    setAccordionCollapsed={callback}
    onClick={onClickCallback}
    items={[
        {title:'Valera', value: '1'},
        {title:'Viktor', value: '2'},
        {title:'Dimych', value: '3'},
        {title:'Anton', value: '4'},
    ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion
        titleValue={'Menu'} collapsed={value}
        setAccordionCollapsed={() => setValue(!value)}
        onClick={onClickCallback}
        items={[
            {title:'Valera', value: '1'},
            {title:'Viktor', value: '2'},
            {title:'Dimych', value: '3'},
            {title:'Anton', value: '4'},
        ]}/>
}
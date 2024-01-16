
import React, { FC, useState } from 'react';

type AccordionPropsType = {
    titleValue: string
}



const UnControlledAccordion: FC<AccordionPropsType> = (props) => {
    let [collapsed, setCollapsed] = useState(false)
    function onClickCollapsedHandler() {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={onClickCollapsedHandler} />
            {!collapsed && <AccordionBody />}
        </div>

    )
};

type AccordionTitlePropsType = {
    title: string
    collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <>
            <h2 onClick={props.collapsed}>---{props.title}---</h2>
        </>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

export default UnControlledAccordion;
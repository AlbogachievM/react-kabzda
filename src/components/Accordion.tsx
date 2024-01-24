
import React, { FC } from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}

const Accordion: FC<AccordionPropsType> = (props) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                setAccordionCollapsed={props.setAccordionCollapsed}
                value={!props.collapsed}
            />
            {!props.collapsed && <AccordionBody />}
        </div>

    )
};

type AccordionTitlePropsType = {
    title: string
    value: boolean
    setAccordionCollapsed: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2 onClick={props.setAccordionCollapsed}>---{props.title}---</h2>
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

export default Accordion;
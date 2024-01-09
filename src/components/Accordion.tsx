
import React, { FC } from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

const Accordion: FC<AccordionPropsType> = (props) => {

    if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
            </div>
        )
    } else {
        <div>
            <AccordionTitle title={props.titleValue} />
            <AccordionBody />
        </div>
    }
};

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h2>---{props.title}---</h2>
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
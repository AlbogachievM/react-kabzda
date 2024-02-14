import React, {FC} from 'react';


type ItemType = {
    title: string
    value: any
}


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void

}


export const Accordion: FC<AccordionPropsType> = (props) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            value={!props.collapsed}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
        <h2 onClick={(e) => props.setAccordionCollapsed()}>---{props.title}---</h2>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((item, index) => <li onClick={() => {
                props.onClick(item.value)
            }}
                                                  key={index}>{item.title}</li>)}
        </ul>
    )
}
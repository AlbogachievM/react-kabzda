import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

const Users = [
    {title: 'Anton', value: '1'},
    {title: 'Artem', value: '2'},
    {title: 'Alex', value: '3'},
    {title: 'Afaco', value: '4'},
]

const callback = action('accordion mode change event fired')

export const SelectedMode = () => {
    return (
        <Select value={'none'}
                onChange={() => {}}
                items={Users}/>
    )
}
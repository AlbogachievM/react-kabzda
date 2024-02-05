
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Raiting, RaitingValueType } from './components/Raiting/Raiting';
import { OnOff } from './components/OnOff/OnOff';
import {UnControlledRaiting} from './components/UnControlledRaiting/UnControlledRaiting';
import { useState } from 'react';
import { UnControlledOnOff } from './components/UnControlledOnOff/UnControlledOnOff';
import {UnControlledAccordion} from "./components/UnControlledAccrordion/UnControlledAccordion";

function App() {

  let [ratingValue, setRatingValue] = useState<RaitingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState(false)
  let [swithOn, setSwithOn] = useState(false)

  return (
    <div className="App">

      <Raiting value={ratingValue} onClick={setRatingValue} />

      <Accordion
        titleValue='Menu'
        collapsed={accordionCollapsed}
        setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
      />

      <OnOff on={swithOn} onChange={setSwithOn} />
      <UnControlledOnOff onChanged={setSwithOn} />

      <UnControlledAccordion titleValue='Menu' />

      <UnControlledRaiting />


    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
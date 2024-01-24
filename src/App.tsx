
import './App.css';
import Accordion from './components/Accordion';
import Raiting, { RaitingValueType } from './components/Raiting';
import { OnOff } from './components/OnOff';
import UnControlledAccordion from './components/UnControlledAccordion';
import UnControlledRaiting from './components/UnControlledRaiting';
import { useState } from 'react';
import { UnControlledOnOff } from './components/UnControlledOnOff';

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
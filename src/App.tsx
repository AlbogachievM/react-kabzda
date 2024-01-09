
import './App.css';
import Accordion from './components/Accordion';
import Raiting from './components/Raiting';

function App() {
  return (
    <div className="App">
      <Accordion titleValue='Menu' collapsed={true}/>
      <Accordion titleValue='Users' collapsed={false}/>

      <Raiting value={1}/>
      <Raiting value={2}/>
      <Raiting value={3}/>
      <Raiting value={4}/>
      <Raiting value={5}/>
    </div>
  );
}
 
type PageTitlePropsType = {
  title: string
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>
}

export default App;
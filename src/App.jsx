import './App.css';
import Counter from './components/Counter/Counter';
import Greeting from './components/Greeting/Greeting';

function App() {
  return <>
    < Greeting name="Mundo" />
    <section>
      < Counter counter={0} countValue={1} />
      < Counter counter={0} countValue={2} />
      < Counter counter={0} countValue={5} />
      < Counter counter={0} countValue={10} />
    </section>
  </>
};

export default App;

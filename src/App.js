
import './App.css';
import Bottomdetail from './components/Bottomdetail';
import Card from './components/Card';
import Eventdetail from './components/Eventdetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { data } from './Data';

function App() {
  return (
    <div>
  <Navbar/>
  <Eventdetail/>
  {data.map((e,i)=> {
    return  <Card e={e} key={i}/>
  })}
  <Bottomdetail/>
  <Footer/>
    </div>
  );
}

export default App;

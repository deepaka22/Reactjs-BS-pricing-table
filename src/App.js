import logo from './logo.svg';
import './App.css';
import Navbar from './bootstrap-pricing/Navbar';
import Header from './bootstrap-pricing/Header';
import Boot from './bootstrap-pricing/Boot';
import PricingChart from './bootstrap-pricing/Pricingchart';
import Classcom from './bootstrap-pricing/Classcom';
import Conditional from './bootstrap-pricing/Conditional';
function App() {


  return (

    
    <div className="App">
      {/* <Navbar/>
      <Header/>
      <Boot/>
      <PricingChart/> */}
        <Conditional name = 'ele'></Conditional>
        {/* <Classcom/> */}
   </div>
  );
}

export default App;

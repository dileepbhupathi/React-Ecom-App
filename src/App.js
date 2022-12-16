import './App.css';
import Ecommerce from "./components/Slider/Slider.js"
import { Ecom_data } from './Constants';


export function App() {
    
  return (
    <div>
      <Ecommerce blogPosts = {Ecom_data} />
      
    </div>
  );
}

export default App;

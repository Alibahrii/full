import '../Css/Menu.css';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import {useState,useEffect} from 'react';
function Menu(){
const [Burgers,setBurgers] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/burgers')
    .then(response =>response.json())
    .then(data=>setBurgers(data))
    .catch(error => console.error('error fetching',error))
});
return(
    <div className="Menu1">
    <Header/>
    <h1>Burger Destination</h1>
   <div className="Menu2">
  {Burgers.map((burger)=><div key={burger.id}>
    <h1>{burger.title}</h1>
    <img src={burger.image} alt={burger.title} className="burger-images"/>
    <p>{burger.description}</p>
  </div>)}





  </div>








    <Footer/>
    </div>
    );
}export default Menu;
import '../Css/Home.css';
import Header from '../Components/Header.js';
import Card from '../Components/Card.js';
import BestSeller from '../Assets/BestSeller.jpg';
import Footer from '../Components/Footer.js';
function Home(){
return(
    <div className="Home1">
     <Header/>
     <h1 className="Burger-destination">Burger Destination</h1>
   <h1 className="Home1-title">
    Our best Seller is 
   </h1>
   
   <Card 
   image={BestSeller}
   title="DoubleBuffalo"
    description="200gfriedChicken, dillPickles,BuffaloSauce"/>

  <ul>
<li>🍟Simple ingredients, real fresh-food taste</li>
<li>🍔Pickles for that perfect tangy bite</li>
<li>Melty cheese layered on a hot patty</li>
<li>House sauces made for bold flavor</li>
  </ul>

<Footer/>






    </div>
    );
}export default Home;
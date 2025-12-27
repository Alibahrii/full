import '../Css/About.css';
import Header from '../Components/Header.js';
import Card from '../Components/Card.js';
import Lebanon from '../Assets/lebanon.jpg';
import Qatar from '../Assets/Qatar.jpg';
import Footer from '../Components/Footer.js';
function About(){
return(
    <div className="About1">
    <Header/>
    <h2>Burger Destination</h2>
    <h3>We have 2 branches in middleEast</h3>
    <div className="Cards"> 
 <Card 
   image={Lebanon}
   title="located since 1999"
    description="in Beirut hamra Street "/>
 <Card 
   image={Qatar}
   title="located since 2010"
    description="in Qatar Doha Street 201 "/>
</div>






<Footer/>
    </div>
    );
}export default About;
import '../Css/Card.css';
function Card(props){
return(
    <div className="Card1">
    <img src={props.image} alt="Burger"/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>








        </div>
    );
}export default Card;
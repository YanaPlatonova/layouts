import ShopCard from '../shop-card/ShopCard';
import './CardView.css'

function CardView({cards}){

  return(
    <div className='grid'>
      {cards.map((card,id) => <ShopCard card={card} key={id}/>)}
    </div>    
  ) 
}

export default CardView;
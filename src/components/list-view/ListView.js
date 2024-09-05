import ShopItem from '../shop-item/ShopItem';
import './ListView.css'

function ListView({items}){

  return(
    <ul>
        {items.map((item,id) => <li key={id}><ShopItem item={item}/></li>)}
    </ul>    
  ) 
}

export default ListView;
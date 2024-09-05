import CardView from "../card-view/CardView";
import {useState} from 'react';
import IconSwitch from "../icon-switch/IconSwitch";
import './Store.css'
import ListView from "../list-view/ListView";

function Store(){
  
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }
    ];

    const [isCardView,setIsCardView] = useState(true);
    
    const onSwitch = () => {
      setIsCardView(prev => !prev)
    }
    
    // view_list
    
    return(
        <div>
            <div className="filter">
                <IconSwitch icon={isCardView ? 'view_module' : 'view_list'} onSwitch={onSwitch}/>
            </div>
            <div className="products">
            { isCardView ? <CardView cards={products}/> : <ListView items={products}/> }
            </div>
            
        </div>
        
    );
}

export default Store;
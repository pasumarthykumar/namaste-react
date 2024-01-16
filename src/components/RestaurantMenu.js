import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu =()=>{
    const {resId}=useParams();
    const [resInfo,setresInfo]=useState(null);
    
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async()=>{
        const data= await fetch(MENU_URL+resId);
        const json= await data.json();
        setresInfo(json.data);
    }
    

    if (resInfo === null) return <Shimmer />;
    
    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    if(itemCards===undefined){
        return <Shimmer />;
    }
  

    return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {
        itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
    );
};


export default RestaurantMenu;
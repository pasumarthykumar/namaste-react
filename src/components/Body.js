import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =()=>{
    const [restaurantList,setRestaurantList]=useState(resList); 
    return (
        <div className='body'>
            <button className="filter-btn" onClick={()=>{
                const filteredList=resList.filter((restaurant)=>{
                return restaurant.data.avgRating>4.0;
            });
            setRestaurantList(filteredList);
            }}>Filter Top Restaurants</button>
            <div className='res-container'>
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                })
            }
            </div>
        </div>
    );
}

export default Body;
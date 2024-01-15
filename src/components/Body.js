import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
    const [restaurantList,setRestaurantList]=useState([]); 
    const [filteredList,setFilteredList]=useState([]);
    const [searchText,setSearchText]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData =async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setRestaurantList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return filteredList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='body'>
            <input placeholder="Search" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>
            <button className="filter-btn" onClick={()=>{
                const filteredList=restaurantList.filter((restaurant)=>{
                return restaurant.info.name.includes(searchText);

            });
            setFilteredList(filteredList);
            }}>Search</button>
            <div className='res-container'>
            {
                filteredList.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                })
            }
            </div>
        </div>
    );
}


export default Body;
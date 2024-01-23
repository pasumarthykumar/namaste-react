import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body =()=>{
    const [restaurantList,setRestaurantList]=useState([]); 
    const [filteredList,setFilteredList]=useState([]);
    const [searchText,setSearchText]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setRestaurantList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return filteredList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='body'>
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" placeholder="Search" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                        }}></input>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                const filteredList=restaurantList.filter((restaurant)=>{
                return restaurant.info.name.includes(searchText);

            });
            setFilteredList(filteredList);
            }}>Search</button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
                filteredList.map((restaurant)=>{
                    return <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/> </Link>
                })
            }
            </div>
        </div>
    );
}


export default Body;
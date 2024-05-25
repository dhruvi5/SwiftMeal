import RestrauntCards from "./Res_card";
import restaurantList from "../utils/mockData"
import { useState, useEffect } from "react";
import shimmer from "./shimmer";


const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    // const fetchdata = async () => {

    //     const fet_data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTIN"
    //     );

    //     const json = await fet_data.json();

    //     console.log(json);
    //     // setl_s(json.data.cards[4].card.card.restaurants);
    //     setl_s(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    // };

    const fetchData = async () => {
        // setIsLoading(true); // Set loading to true before fetching
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
       
        );
        const json = await response.json();
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
           ?.restaurants;
        setListOfRestraunts(restaurants);

        // setFilteredRestraunts(restaurants);
        // setIsLoading(false); // Set loading to false after fetching
      };    

            if(listOfRestraunts.length===0){
            return  
                // <div className="loader"></div>
                <shimmer />
          
            
        };
   

    // const [l_s, setListOfRestraunts] = useState();
    return (


        <div className="body">
            <div className='search'>
                <button className="btn-filter" onClick={() => {
                    // console.log("CLICKED")
                    const g = listOfRestraunts.filter((res) => res.info.avgRating > 4);

                    console.log(listOfRestraunts) //data is filtered but ui is not updated
                    setListOfRestraunts(g);
                }}>
                    Top rated restaurant
                </button>
            </div>
            <div className='res-cont'>

                {/* {
                    l_s.map((restaurant) => (<RestrauntCards key="restaurant.data.id" resData={restaurant} />))
                }
                 */}
                {listOfRestraunts.map((restraunt) => (
          <div key={restraunt.info.id}>
            <RestrauntCards key={restraunt.info.id} resData={restraunt.info} /> </div>
        ))}

            </div>
        </div>
    );
};

export default Body;

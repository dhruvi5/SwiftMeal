import RestrauntCards from "./Res_card";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filt_res, set_filt_res] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestraunts(restaurants);
    set_filt_res(restaurants);
  };

  const [search_res, set_search_res] = useState("");
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Check Internet Connection</h1>;
  }
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="flex">
        <div>
          <button
            className="px-4  bg-green-100 m-2 rounded-lg dark:bg-green-700 dark:text-white"
            onClick={() => {
              const g = filt_res.filter((res) => res.info.avgRating > 4);
              // console.log(listOfRestraunts); //data is filtered but ui is not updated
              set_filt_res(g);
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="filter">
          <input
            className="border border-solid border-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            type="text"
            value={search_res}
            onChange={(e) => {
              set_search_res(e.target.value);
            }}
          ></input>
          <button
            className="px-4  bg-green-100 m-2  rounded-lg  dark:bg-green-700 dark:text-white"
            onClick={() => {
              const h = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(search_res.toLowerCase())
              );
              set_filt_res(h);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filt_res.map((restraunt) => (
          <div key={restraunt.info.id}>
            <Link to={"/restaurant/" + restraunt.info.id}>
              <RestrauntCards resData={restraunt.info} />{" "}
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

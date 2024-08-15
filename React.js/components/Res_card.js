// const Res_card = (props) =>{   //destructuring on the fly
//    const {resData} =props;
//     const {cloudinaryImageId, name,cuisines,avgRating,costForTwo} =resData?.data;
//     return(
//         <div className='res-card '  >

//             <img className="noodles"   src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId }/>

//             <h3 className='res-name'>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4> {avgRating}</h4>
//             <h4> ${costForTwo/100} for Two</h4>
//         </div>
//     );
// };

// export default Res_card;

import { CDN_URL } from "../utils/constants.js";

const RestrauntCards = ({ resData }) => {
  // const { resData } = props;
  // console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    areaName,
    avgRatingString,
    sla,
  } = resData;
  const Scuisines = cuisines.slice(0, 3);
  return (
    <div
      className="m-4 p-4 h-[530px] w-[280px] rounded-lg 
    hover:bg-slate-200 dark:hover:bg-slate-800 
    transform hover:scale-105 transition-transform duration-300 
    bg-white dark:bg-gray-800"
    >
      <img
        className="rounded-lg h-[300px] w-[350px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold font-serif text-center text-lg">{name}</h3>
      <span className="flex items-center space-x-2 m-3">
        <h4
          className="bg-light-red text-white px-1 py-0 rounded-md"
          style={{
            backgroundColor:
              avgRatingString < 4
                ? "var(--light-red)"
                : avgRatingString === "--"
                ? "white"
                : "green", // Adjust the color to ensure visibility
            color: avgRatingString === "--" ? "black" : "white",
            padding: "2px 6px", // Add padding to improve visibility
            borderRadius: "5px", // Optional: to make it look better
            marginRight: "8px", // Space between elements
          }}
        >
          <i className="fa-solid fa-star"></i> {avgRatingString}
        </h4>
        <h4 className="text-gray-600">•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4 className="text-gray-600">•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
      <h5 className="m-3">{cuisines.join(", ")}</h5>
      <h5 className="m-3">{areaName}</h5>
    </div>
  );
};

export default RestrauntCards;

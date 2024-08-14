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
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span style={{ display: "flex", alignItems: "center" }}>
        <h4
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
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

export default RestrauntCards;

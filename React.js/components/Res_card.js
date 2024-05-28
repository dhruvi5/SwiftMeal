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
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  const Scuisines = cuisines.slice(0, 3);
  return (
    <div className="res-card">
    <div data-testid="resCard" className="m-4 p-4 w-[300px] h-[550px] bg-white shadow-2xl rounded-lg hover:bg-slate-200">
      <img
        // className="rounded-lg w-72 h-[250px]"
        className="noodles"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="py-4 my-4 text-lg">{Scuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
    </div>
    </div>
  );
};


export default RestrauntCards;


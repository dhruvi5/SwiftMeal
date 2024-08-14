// import { useEffect, useState } from "react";
// import Shimmer from "./shimmer";
// import { MENU } from "../utils/constants";
// import { CDN_URL } from "../utils/constants";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//   const [ResInfo, setResInfo] = useState(null);
//   const { resId } = useParams();
//   console.log(resId);

//   useEffect(() => {
//     Menudata();
//   }, []);

//   const Menudata = async () => {
//     const data = await fetch(MENU + resId);
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//   };

//   if (ResInfo === null) {
//     return <Shimmer />;
//   }
//   const { name } = ResInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
//   console.log(itemCards);

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} -
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

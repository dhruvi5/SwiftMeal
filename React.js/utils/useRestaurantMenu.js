import { useEffect, useState } from "react";
import { MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [ResInfo, setResInfo] = useState(null);
  useEffect(() => {
    Menudata();
  }, []);
  const Menudata = async () => {
    const data = await fetch(MENU + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  return ResInfo;
};

export default useRestaurantMenu;

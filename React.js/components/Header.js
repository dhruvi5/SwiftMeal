import { Link } from "react-router-dom";
import { CART } from "../utils/constants";
import LOGO from "../utils/logo.png";
import { useState } from "react";

const Header = () => {
  const [log_i, set_log] = useState("Login");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`flex justify-between items-center p-4 h-30 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center">
        <img
          src={LOGO}
          alt="Logo"
          className={`w-40 ${darkMode ? "text-white" : "text-black"}`}
        />
      </div>
      <div className="flex items-center">
        <button
          className={`px-4 mx-2 ${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
          } rounded-lg`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌙 Dark" : "🌞 Light"}
        </button>
        <ul className="flex">
          <li className="px-2">
            <Link
              to="/"
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
              HOME
            </Link>
          </li>
          <li className="px-2">
            <a
              href="/about"
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
              ABOUT US
            </a>
          </li>
          <li className="px-2">
            <Link
              to="/contact"
              className={`${darkMode ? "text-white" : "text-black"}`}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
        <button className="mx-2">
          <img className="w-5" src={CART} alt="Cart" />
        </button>
        <button
          className={`px-4 mx-2 ${darkMode ? "text-white" : "text-black"}`}
          onClick={() => {
            set_log(log_i === "Login" ? "Logout" : "Login");
          }}
        >
          {log_i}
        </button>
      </div>
    </div>
  );
};

export default Header;
// import { Link } from "react-router-dom";
import { CART } from "../utils/constants";
import LOGO from "../utils/logo.png";
import { useState } from "react";

// const Header = () => {
//   const [log_i, set_log] = useState("Login");
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <div
//       className={`flex justify-between items-center p-4 h-30 ${
//         darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex items-center">
//         <img
//           src={LOGO}
//           alt="Logo"
//           className={`w-40 ${darkMode ? "text-white" : "text-black"}`}
//         />
//       </div>
//       <div className="flex items-center">
//         {/* <input
//           className="border border-solid mx-3 border-black dark:border-gray-600 dark:bg-gray-800 dark:text-white"
//           type="text"
//           placeholder="Search"
//         /> */}
//         <button
//           className={`px-4 mx-2 ${
//             darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
//           } rounded-lg`}
//           onClick={toggleDarkMode}
//         >
//           {darkMode ? "🌙 Dark" : "🌞 Light"}
//         </button>
//         <ul className="flex">
//           <li className="px-2">
//             <Link
//               to="/"
//               className={`${darkMode ? "text-white" : "text-black"}`}
//             >
//               HOME
//             </Link>
//           </li>
//           <li className="px-2">
//             <a
//               href="/about"
//               className={`${darkMode ? "text-white" : "text-black"}`}
//             >
//               ABOUT US
//             </a>
//           </li>
//           <li className="px-2">
//             <Link
//               to="/contact"
//               className={`${darkMode ? "text-white" : "text-black"}`}
//             >
//               CONTACT US
//             </Link>
//           </li>
//         </ul>
//         <button className="mx-2">
//           <img className="w-5" src={CART} alt="Cart" />
//         </button>
//         <button
//           className={`px-4 mx-2 ${darkMode ? "text-white" : "text-black"}`}
//           onClick={() => {
//             set_log(log_i === "Login" ? "Logout" : "Login");
//           }}
//         >
//           {log_i}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

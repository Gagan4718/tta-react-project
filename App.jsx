//App.jsx










// import { createContext, useEffect, useState } from "react";
// import Header from "./component/Header";
// //import { Box } from "@mui/material";
// //import axios from "axios";
// import CountryCard from "./component/CountryCard";
// import { Routes, Route } from "react-router-dom";
// import Homepage from "./Homepage";
// //import About from "./pages/About";
// import SingleCountry from "./SingleCountry";

// export const ModeContext = createContext();

// function App() {
//   const [mode, setMode] = useState("light");
//   const [countries, setCountries] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <ModeContext.Provider value={{ mode, setMode }}>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Homepage countries={countries} />} />
//         <Route path="/country/:name" element={<SingleCountry />} />
//       </Routes>
//     </ModeContext.Provider>
//   );
// }

// export default App;












// // App.jsx

// import { createContext, useEffect, useState } from "react";
// import Header from "./component/Header";
// import { Box } from "@mui/material";
// //import axios from "axios";
// //import CountryCard from "./component/CountryCard";
// import CountryCard from "./CountryCard";

// export const ModeContext = createContext();

// function App() {
//   const [mode, setMode] = useState("light");
//   const [countries, setCountries] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://restcountries.com/v2/all")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(countries);

//   return (
//     <ModeContext.Provider value={{ mode, setMode }}>
//       <Header />
//       <Box
//         bgcolor={mode === "light" ? "transparent" : "hsl(207, 26%, 17%)"}
//         minHeight={"100vh"}
//         py={"70px"}
//       >
//         <Box  px={"80px"} display={"flex"} flexWrap={"wrap"} gap={"30px"} justifyContent={"center"}>
//           {countries?.map((country) => {
//             return <CountryCard key={country.name} country={country} />;
//           })}
//         </Box>
//       </Box>
//     </ModeContext.Provider>
//   );
// }

// export default App;

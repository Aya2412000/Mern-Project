import React from "react";
import { useState, useEffect } from "react";
import NavProfile from "../../Components/Nav-profile/NavProfile";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services for Profile/Services";
export default function Profile() {
  return (
    <div>
      <NavProfile />
      <Services />
      <Footer />
    </div>
  );
}

// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import NavProfile from "../../Components/Nav-profile/NavProfile";
// import Footer from "../../Components/Footer/Footer";
// import ServicesSection from "../../sections/services section/js/Services-Section";

// export default function Profile() {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUserData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <NavProfile />
//       <div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             <h1>
//               Welcome,{" "}
//               {userData.map((user) => (
//                 <span key={user.id}>{user.username}</span>
//               ))}
//             </h1>
//             <p>Email: {userData[0].email}</p>
//             <p>Phone: {userData[0].phone}</p>
//             {/* Display other user data here */}
//           </>
//         )}
//       </div>
//       <ServicesSection />
//       <Footer />
//     </div>
//   );
// }

import React from "react";

// if(localStorage.token){
//     const token = localStorage.getItem('token');
//     fetch('https://conduit.productionready.io/api/user',{
//         headers: {
//             authorization: `Token ${token}`
//         }
//     }).then(res => res.json()).then(user => {

//     })
// }

const UserContext = React.createContext({});

export default UserContext;
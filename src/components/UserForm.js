// import { BASE_URL } from "../constraints";
// import { useState, useEffect } from "react";

// export default function UserForm({user, deleteUser, initialDelay=0}) {
    
    
//     const [users, setUsers] = useState({ first_name: "", last_name: "", user_name: "", email: "" })
//     const [newUser, setNewUser] = useState({...user});
//     const [editMode, setEditMode] = useState(false);
//     const [render, setRender] = useState(false)
   
//     useEffect(() => {
//         const timeout = setTimeout(() => {setRender(true)}, initialDelay)
//         return () => clearTimeout(timeout)
//       }, [initialDelay])

// //       // UPDATE
// //   function updateUser(user) {
// //     fetch(BASE_URL + 'users/' + user.id, {
// //       method:"PUT",
// //       body: JSON.stringify(user),
// //       headers: {
// //         "Accept": "applicaton/json",
// //         "Content-Type": "application/json"
// //       }
// //     })
// //     const newUsers = users.map (usern => {
// //       if (usern.id === user.id) {
// //         usern = user
// //       }
// //       return usern
// //     })
// //     setUsers(newUsers)
// // }


//     function handleChange(e) {
//         const updatedValue = {...newUser}
//         updatedValue[e.target.name] = e.target.value;
//         setNewUser({ ...updatedValue });
    
//     }

//     function toggleEdit() {
//         setEditMode(!editMode);
//       }

   
    
//     function handleUpdate(e) {
//        e.preventDefault();
//        updateUser(newUser);
//        setEditMode(false);
//     }
//     if (!render) {
//         return <></>
//       }
    

// // return(

//     <div className="card">
      
//         <p>First Name: {user.first_name}</p>
    
//       <p>Last Name: {user.last_name}</p>
//       <p>User Name: {user.user_name}</p>
//       <p>Email Address: {user.email}</p>
      
     
//       {editMode && (
//         <>
//           <button onClick={() => deleteUser(user)}>Delete User/Bookshelf</button>

//           <form onSubmit={handleUpdate}>
//             <input name="first_name" value={newUser.first_name} onChange={handleChange} />
//             <input name="last_name" value={newUser.last_name} onChange={handleChange} />
//             <input name="user_name" value={newUser.user_name} onChange={handleChange} />
//             <input name="email" value={newUser.email} onChange={handleChange} />
            
             
//             <button type="submit">Update User/Bookshelf</button>
//           </form>
//         </>
//       )}
//       <button onClick={toggleEdit}>Edit</button>
//     </div>
//   );



// }
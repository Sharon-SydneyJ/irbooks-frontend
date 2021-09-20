import React, { useState, useEffect } from "react"
import { BASE_URL } from "../constraints"
import User from "./User";


export default function UserContainer() {

  const [users, setUsers] = useState(null);
  // READ
  useEffect (() => {
    fetch(BASE_URL + 'users')
    .then(res => res.json())
    .then(json => setUsers(json))
  }, [])

  function populateUsers() {
    return users.map(user => <User user={user} updateUser={updateUser} deleteUser={deleteUser} key={user.id} />)
  }

//  DELETE
 function deleteUser(user) {
   fetch(BASE_URL + 'users/' + user.id, {
     method: "DELETE"
   })
   const newUsers = users.filter(usern => usern.id !== user.id)
   setUsers(newUsers)

  }
// UPDATE
  function updateUser(user) {
    fetch(BASE_URL + 'users/' + user.id, {
      method:"PUT",
      body: JSON.stringify(user),
      headers: {
        "Accept": "applicaton/json",
        "Content-Type": "application/json"
      }
    })
    const newUsers = users.map (usern => {
      if (usern.id === user.id) {
        usern = user
      }
      return usern
    })
    setUsers(newUsers)
  }

 

  return(
    <div>
      {users && populateUsers()}

    </div>
    
  )
}
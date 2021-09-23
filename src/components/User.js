
import React from 'react'
import { Image, List } from "semantic-ui-react";



export default function User({user}) {
    
  
    
    
    return (

      <div>

        <List key={user.id} selection verticalAlign='middle'>
          <List.Item>
            <Image avatar src='https://www.mcicon.com/wp-content/uploads/2020/12/Education_Book_1-copy-9.jpg' />
            <List.Content>
              <List.Header>Name: {user.first_name}, User Name: {user.user_name}</List.Header>
              Top Contributor
            </List.Content>
          </List.Item>
         
        </List>

        

        </div>
    )

    
    }

      
      


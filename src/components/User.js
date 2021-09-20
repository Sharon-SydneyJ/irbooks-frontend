
import { Table, Button, Icon, Form } from "semantic-ui-react";
import { useState, useEffect} from "react";

export default function User({user, deleteUser, updateUser, initialDelay=0}) {
    
    const [newUser, setNewUser] = useState({...user});
    const [editMode, setEditMode] = useState(false);
    const [render, setRender] = useState(false)
   
    useEffect(() => {
        const timeout = setTimeout(() => {setRender(true)}, initialDelay)
        return () => clearTimeout(timeout)
      }, [initialDelay])

    function handleChange(e) {
        const updatedValue = {...newUser}
        updatedValue[e.target.name] = e.target.value;
        setNewUser({ ...updatedValue });
    
    }

    function toggleEdit() {
        setEditMode(!editMode);
      }

   
    
    function handleUpdate(e) {
       e.preventDefault();
       updateUser(newUser);
       setEditMode(false);
    }
    if (!render) {
        return <></>
      }
    
    
    return (

       
        <div>
  <Table singleLine>
    <Table.Header className="main-header">
      <Table.Row>
        <Table.HeaderCell>User id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>User Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
   
        <Table.Row key={user.id}>
        <Table.Cell>{ user.id }</Table.Cell>
        <Table.Cell>{ user.first_name}</Table.Cell>
        <Table.Cell>{ user.last_name}</Table.Cell>
        <Table.Cell>{ user.user_name}</Table.Cell>
        <Table.Cell>{ user.email}</Table.Cell>
        
      </Table.Row>
     
   
    
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
        {/* <Link to='/UpdateUser'>
          <Button onClick='Submit'
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Update User
          </Button>
          </Link> */}
          <Button onClick={() => deleteUser(user)}
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Delete User
          </Button>
          
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  {editMode && (
            <>
  <Form onSubmit={handleUpdate} className="User-form">
    <Form.Field>
      <label className='form-label'> First Name</label>
      <input name="name" value={newUser.first_name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label className='form-label'>Name</label>
      <input name="name" value={newUser.last_name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label className='form-label'>User Name</label>
      <input name="name" value={newUser.user_name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label className='form-label'>Email</label>
      <input name="name" value={newUser.email} onChange={handleChange} />
    </Form.Field>
    <Button type='submit'>Update User</Button>
  </Form>
  </>
  )}
  
  <button onClick={toggleEdit}>Edit</button>
  </div>
);
  }
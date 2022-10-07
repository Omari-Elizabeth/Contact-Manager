import {useState} from 'react'
import { Link } from 'react-router-dom';
import ContactList from './ContactList';

function NewContact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  // const [updatedContact, setupdatedContact]=useState({...ContactList})
  // console.log(name, phone)
  function handleSubmit(e){

    e.preventDefault()

    const newContact = {
      name: name,
      phone: phone,
      email: email,
      company: company,
      location: location,
      description: description
    };
  fetch("https://contact-list-server-app.herokuapp.com/Contacts", {
    method: "POST",
    headers: {
      'content-type': "application/json"
    },
    body: JSON.stringify(newContact)
  })
  
  alert(`${name}'s has been created successfully!!`)

  setName("")
  setPhone("")
  setEmail("")
  setCompany("")
  setLocation("")
  setDescription("")

 }
  return (
    <form id="form">
      <input type="text" name="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)}/><br/>
      <input type="tel" name="phone" placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)}/><br/>
      <input type="text" name="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/><br/>
      <input type="text" name="company" placeholder='Company'  value={company} onChange={e => setCompany(e.target.value)}/><br/>
      <input type="text" name="location" placeholder='Location' value={location} onChange={e => setLocation(e.target.value)}/><br/>
      <input type="text" name="description" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Save</button>
      <Link className='nav-links' to='/home'>
         <button type="submit">Cancel</button>
      </Link>
    </form>
)
  }

export default NewContact;
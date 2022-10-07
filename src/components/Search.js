import React from 'react'
import {useEffect, useState} from 'react'
import ContactList from './ContactList'
import '../App.css'

function Search() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://contact-list-server-app.herokuapp.com/Contacts')
    .then(res => res.json())
    .then(data =>setContacts(data))
  }, [])

  return (
    <div>
      <div className='search'>
          <input id="searchInput" type="text" placeholder='Search for a contact... ' onChange={(e) => handleSearch(e)}/>
      </div>
      <div className='cards'>
      {newContactList && newContactList.map((contact) => <ContactList key={contact.id} contact={contact} handleDelete={handleDelete}/>)}
      </div>
    </div>
  )
}

export default Search
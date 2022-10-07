import React from 'react'
import ContactList from './ContactList'
import { useState, useEffect } from 'react';
import '../App.css'

function Home() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://contact-list-server-app.herokuapp.com/Contacts')
    .then(res => res.json())
    .then(data =>setContacts(data))
  }, [])
  

  function handleDelete(contactId) {
    fetch(`https://contact-list-server-app.herokuapp.com/Contacts/${contactId}`, {
      method: "DELETE"
    })
    const newContactList = contacts.filter(contact => contact.id !== contactId)
    setContacts(newContactList)
  }

  return (
    <div className='cards'>
        {contacts && contacts.map((contact) => <ContactList key={contact.id} contact={contact} handleDelete={handleDelete}/>)}
    </div>
  )
}

export default Home
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
  

  return (
    <div className='cards'>
        {contacts && contacts.map((contact) => <ContactList key={contact.id} contact={contact}/>)}
    </div>
  )
}

export default Home
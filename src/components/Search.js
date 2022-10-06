import React from 'react'
import {useEffect, useState} from 'react'

function Search({contact}) {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://contact-list-server-app.herokuapp.com/Contacts')
    .then(res => res.json())
    .then(data =>console.log(data))
  }, [])
  
  return (
    <div className='search'>
        <input id="searchInput" type="text" placeholder='Search for a contact...'/>
    </div>
  )
}

export default Search
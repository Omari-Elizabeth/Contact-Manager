import React from 'react'
import {useEffect, useState} from 'react'

function Search({contact}) {
  const [contacts, setContacts] = useState([])


  return (
    <div className='search'>
        <input id="searchInput" type="text" placeholder='Search for a contact...'/>
    </div>
  )
}

export default Search
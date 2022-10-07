import React from 'react'
import { Link } from 'react-router-dom';

function NewContact() {
  return (
    <form id="form">
      <input type="text" name="name" placeholder='Name'/><br/>
      <input type="tel" name="phone" placeholder='Phone'/><br/>
      <input type="text" name="email" placeholder='Email'/><br/>
      <input type="text" name="company" placeholder='Company'/><br/>
      <input type="text" name="location" placeholder='Location'/><br/>
      <input type="text" name="description" placeholder='Description'/>
      <button type="submit">Save</button>
      <Link className='nav-links' to='/home'>
         <button type="submit">Cancel</button>
      </Link>
    </form>
)
  }

export default NewContact;
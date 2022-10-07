import React from 'react'

function NewContact() {
  return (
    <form id="form">
      <input type="text" name="name" placeholder='Name'/>
      <input type="tel" name="phone" placeholder='Phone'/>
      <input type="text" name="email" placeholder='Email'/>
      <input type="text" name="company" placeholder='Company'/>
      <input type="text" name="location" placeholder='Location'/>
      <input type="text" name="description" placeholder='Description'/>
      <button type="submit">Save</button>
    </form>
)
  }

export default NewContact;
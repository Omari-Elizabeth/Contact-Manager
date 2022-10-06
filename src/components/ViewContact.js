import React from 'react'

function ViewContact()  {
return (
    <div>
     <form>
     <h1>Update</h1>
       <label>
         Name:
         <input type='text' name='name'/>
       </label><br/>
       <label>
         Phone:
         <input type='text' name='name'/>
       </label><br/>
       <label>
         Email:
         <input type='text' name='name'/>
       </label><br/>
       <label>
         Company:
         <input type='text' name='name'/>
       </label><br/>
       <label>
         Location:
         <input type='text' name='name'/>
       </label><br/>
       <label>
         Description:
         <textarea/>
       </label><br/>
       <button className='btn'>Update</button>
     </form>
    </div>
  )
}

export default ViewContact
import { useState } from 'react';
import './App.css';

function App() {

 const[formData, setformData] = useState({
  firstName:"",lastName:"",email:"" ,code:"" , state:"", city:"", pushNotifications:"",
  street:"" , country:"India", comment:false, candidate:false, offers:false
 })

  function changeHandler(event){
    const{name, value, checked,type } = event.target;

   setformData( prevData => {
      return{
        ...prevData,
        [name]:type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={submitHandler} className='mt-3 m-auto max-w-md flex flex-col justify-center items-start'>
        <div className='flex flex-col justify-center  gap-0.5'> 

          <label htmlFor='first'> First Name 
          <br/>
          <input
           type='text' 
           name='firstName'
           id='first'
           value={formData.firstName}
           onChange={changeHandler}
           placeholder='Deepika' 
           className='border border-black rounded-sm' /> 
          </label>

          <label htmlFor='last'> Last Name
          <br/>
          <input 
          type='text' 
          name='lastName'
          id='last'
          value={formData.lastName}
          onChange={changeHandler}
          placeholder='Nagraj' 
          className='border border-black rounded-sm'/> 
          </label>

          <label htmlFor='emailId'> Email Address
          <br/>
          <input 
          type='email'
          name='email'
          id='emailId'
          value={formData.email}
          onChange={changeHandler}
          placeholder='deepikanagraj1212@gmail.com'  
          className='border border-black rounded-sm'/> 
          </label>

          <label htmlFor='country'> Country
          <br/>
             <select 
             id='country'
             name='country'
             onChange={changeHandler}
             value={formData.country}
             className='border border-black rounded-sm'> 
                <option >India</option>
                <option >USA</option>
                <option >China</option>
             </select>
          </label>

          <label htmlFor='streetAdd'> Street Address
          <br/>
          <input 
          type='text' 
          name='street'
          id='streetAdd'
          value={formData.street}
          onChange={changeHandler}
          placeholder='Idgah Hills' 
          className='border border-black rounded-sm'></input>
          </label>

          <label htmlFor='city'> City
          <br/>
          <input 
          type='text'
          name='city'
          id='city'
          value={formData.city}
          onChange={changeHandler} 
          placeholder='Bhopal' 
          className='border border-black rounded-sm'></input>
          </label>

          <label htmlFor='state'> State
          <br/>
          <input 
          type='text' 
          name='state'
          id='state'
          value={formData.state}
          onChange={changeHandler}
          placeholder='M.P.' 
          className='border border-black rounded-sm'></input>
          </label>

          <label htmlFor='code'> Postal code
          <br/>
          <input 
          type='number'
          name='code'
          id='code'
          value={formData.code}
          onChange={changeHandler}
          placeholder='462001' 
          className='border border-black rounded-sm'></input>
          </label>
         
        </div>

        <div className='mt-5  flex flex-col justify-center'> By Email
            <label htmlFor='comment'>
                <input 
                type='checkbox' 
                name='comment'
                onChange={changeHandler}
                checked={formData.comment}
                id='comment'></input>
                Comments <br/>
                Get notified when someones posts a comment on a posting.
            </label>

            <label htmlFor='candidate'>
                <input 
                type='checkbox' 
                name='candidate'
                onChange={changeHandler}
                checked={formData.candidate}
                id='candidate'></input> 
                Candidates <br/>
                Get notified when a candidate applies for a job.
            </label>

            <label htmlFor='offers'>
                <input 
                type='checkbox' 
                name='offers'
                onChange={changeHandler}
                checked={formData.offers}
                id='offers'></input> 
                Offers <br/>
                Get notified when a candidate accepts or rejects an offer.
            </label>

        </div>

        <div className='mt-5 mb-3 flex flex-col justify-center '> Push Notification <br/>
        These are delivered via SMS to your mobile phone .

           <label htmlFor='everything'>
           <input 
           type='radio'
           id='everything'
           name='pushNotifications'
           onChange={changeHandler}
           value="Everything"
          ></input> 
           Everything
           </label>

           <label htmlFor='pushEmail'>
           <input 
           type='radio'
           id='pushEmail'
           name='pushNotifications'
           onChange={changeHandler}
           value="pushEmail"
           ></input> Same as email
           </label>

           <label htmlFor='pushNothing'>
           <input 
           type='radio'
           id='pushNothing'
           name='pushNotifications'
           onChange={changeHandler}
           value="pushNothing"
           ></input> No Push Notifications
           </label>


        </div>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
        Save</button>
    </form>
  );
}

export default App;

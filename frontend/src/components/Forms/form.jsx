import { useState } from "react";
import apiCollections from "../../API/addUser.api";
import {useNavigate} from "react-router-dom";
import PaymentForm from "../payment/Payment";

const  Form=()=>{
    const history=useNavigate();
    const [message,setMessage] = useState("");
    const [show,setShow] = useState(false);
    const [user,setUser] = useState({
        name:"",email:"",age:0,batch:"",mobile:"",fee:false,
    });

    const batchList=['select batch','6-7 AM','7-8 AM','8-9 AM','5-6 PM'];
    const ageList=['age'];
    for(let i=18;i<=65;i++){
        ageList.push(i);
    }

    let name, value;
    const handleInputs =(e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        apiCollections.addUser(user)
        .then((data)=>{
          if(data.data.success)
          {
            setMessage(data.data.message)
            console.log(data.data.message);
          }
          else
          {
            setMessage(data.data.message);
           console.log(data.data.message);
          }
        });
        setShow(true);
        setTimeout(Reload,3000);
        console.log(user);
    }

    const Reload =()=>{
      setShow(false);
      // window.location.replace('/');
    }

    const paymentStatus=(data)=>{
      setShow(true);
      setMessage(data.message);
      setUser({...user,fee : data.status});
    }

    return (
      <>
<form onSubmit={handleSubmit} class="max-w-md mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {show ? message : "Add User"}
      </a>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name"
            value={user.name}
            onChange={handleInputs}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
          <div class="mt-2">
            <select id="age" name="age"
            value={user.age}
            onChange={handleInputs}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              {ageList.map((element,index) => {
                return (<option>{element}</option>)
              })
              }
            </select>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email"
            value={user.email}
            onChange={handleInputs}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="batch" class="block text-sm font-medium leading-6 text-gray-900">Batch</label>
          <div class="mt-2">
            <select id="batch" name="batch"
            value={user.batch}
            onChange={handleInputs}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              {batchList.map((ele,index)=>{
                return (<option >{ele}</option>)
              })}
            </select>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="mobile" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
          <div class="mt-2">
            <input type="text" name="mobile" id="mobile"
            value={user.mobile}
            onChange={handleInputs}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <PaymentForm status={paymentStatus}/>
    <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Save</button>
  </div>
</form>

</>
    )
}


export default Form;
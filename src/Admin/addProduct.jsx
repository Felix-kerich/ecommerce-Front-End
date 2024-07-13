import { useEffect, useState } from "react"
import axios from 'axios'

export default function AddProduct() {

    const[productId, setProductId] = useState('')
    const[productName, setProductName] = useState('') 
    const[description, setdescription] = useState('')
    const[price, setPrice] = useState('')
    const[product, setProduct] = useState([])

    
    const handleclick = async (e) => { 
      e.preventDefault()
      const product = {productId,productName,description,price};
      console.log(product)
      


    //   fetch("http://127.0.0.1:8080/products/save",{
    //     method:"POST",
    //     headers:{"Contnt-Type":"application/json"},
    //     body:JSON.stringify(product)
    //   }).then(()=>{console.log("New student Added")}) 
    // }s


  
    try {
      const response = await axios.post('http://127.0.0.1:8080/products/save', product, {
        auth: {
          username: 'admin',
          password: 'admin',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
     console.log('Product saved successfully:', response.data);
    } catch (error) {
      console.error('There was an error saving the product:', error);
    }
  };

  useEffect(()=>{
    fetch("http://127.0.0.1:8080/products/")
    .then(res=>res.json())
    .then((result)=>{
      setProduct(result);
    }
  )
  },[])   
  

    return (


      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your Product
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form className="space-y-6">
        
      <div>
      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
        Product Id
      </label>
      <input
        type="text"
        name="productId"
        id="productId"
        value={productId}
        onChange={(e)=>setProductId(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"        placeholder="X123"


      />
        


        
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
        Product Name
      </label>
      <input
        type="text"
        name="productName"
        id="productName"
        value={productName}
        onChange={(e)=>setProductName(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"        placeholder="Shirt"
      />


<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
        Product Description
      </label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"        placeholder="White shirt"
      />

        



        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Price
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"            placeholder="0.00"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>

        <div>
                <button                  
                  onClick={handleclick}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
      </div>
      </form> 
          
      </div>
      </div>
      </div>
      
    )
  }
  
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name:"",email: "", password: "" , cpassword:""});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const{name, email ,password}= credentials;
    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         name,email,password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Save token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/"); 
        props.showAlert("Account created Successfully", "success")
      } else {
        props.showAlert("Invalid Credentials", "danger")
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while logging in. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700" onChange={onChange}>
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            // value={credentials.email}
            onChange={onChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // value={credentials.email}
            onChange={onChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            // value={credentials.password}
            onChange={onChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
           Confirm Password
          </label>
          <input
            type="cpassword"
            id="cpassword"
            name="cpassword"
            // value={credentials.password}
            onChange={onChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Signup
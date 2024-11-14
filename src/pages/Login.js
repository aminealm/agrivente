import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login } from '../services'
import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  useTitle('Login');

  async function handleLogin(event){
    event.preventDefault();
    const authDetail = {
      email: email.current.value,
      password: password.current.value
    }
    const data = await login(authDetail);
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  return (
    <main className="flex  justify-center  pt-11">
      <section className="w-full max-w-md">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-700 dark:border-gray-600">
          <div className="mb-6 ">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input ref={email} type="email" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="shubham@example.com" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input ref={password} type="password" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm w-full py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-800">Register here</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

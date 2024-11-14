import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services";
import { useTitle } from "../hooks/useTitle";

export const Register = () => {
  const navigate = useNavigate();
  useTitle("Register");

  async function handleRegister(event) {
    event.preventDefault();

    const authDetail = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const data = await register(authDetail);
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  return (
    <main className="flex justify-center pt-11">
      <section className="w-full max-w-md">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Register</p>
        <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-700 dark:border-gray-600">
  <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
    <input
      type="text"
      id="name"  // Corrected: Added "name" id
      name="name" // Added name attribute
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="John Doe"
      required
      autoComplete="off"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input
      type="email"
      id="email" // Corrected: Added "email" id
      name="email" // Added name attribute
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder="john.doe@example.com"
      required
      autoComplete="off"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input
      type="password"
      id="password" // Corrected: Added "password" id
      name="password" // Added name attribute
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      required
      minLength="7"
    />
  </div>
  <button
    type="submit"
    className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm w-full py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Register
  </button>
</form>

      </section>
    </main>
  );
};

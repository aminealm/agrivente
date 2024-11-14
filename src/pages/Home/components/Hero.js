import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-3xl font-bold">
        Découvrez AgriVente, votre marché local en ligne.
        </h1>
        <p className="text-2xl my-7  pr-4 dark:text-slate-300" style={{ textAlign: 'justify' }}>
          AgriVente est la destination incontournable pour faciliter la vente directe de produits frais entre agriculteurs locaux et consommateurs. Découvrez une nouvelle manière de soutenir l'agriculture locale tout en accédant à une variété de produits de qualité, directement de la ferme à votre table.
        </p>
        <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explorez les Produits</Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          alt="CodeBook Hero Section"
          style={{ width: '1800px', height: '400px' }} // Ajoutez vos dimensions personnalisées ici
        />
      </div>
    </section>
  );
};

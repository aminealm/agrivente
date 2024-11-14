import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { getProductList } from "../../services/productService";
import {toast} from 'react-toastify'


export const ProductsList = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore Ebook Collection");

  const [filters, setFilters] = useState({
    sortBy: "",
    rating: 0,
    bestSellerOnly: false,
    inStockOnly: false,
  });

  const clearFilters = () => {
    setFilters({
      sortBy: "",
      rating: 0,
      bestSellerOnly: false,
      inStockOnly: false,
    });
  };

  useEffect(() => {
    async function fetProducts() {
      try {
        const data = await getProductList(searchTerm);
        setProducts(data);
        setErrorMessage("");
      } catch (error) {
        toast.error(error.message,{closeButton:true})
      }
    }
    fetProducts();
  }, [searchTerm]);

  const filteredProducts = products
    .filter((product) => {
      if (filters.bestSellerOnly && !product.best_seller) {
        return false;
      }
      if (filters.inStockOnly && !product.in_stock) {
        return false;
      }
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === "lowToHigh") {
        return a.price - b.price;
      } else if (filters.sortBy === "highToLow") {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Products ({filteredProducts.length})
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              onClick={() => setShow(!show)}
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
         {errorMessage}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}{" "}
        </div>
      </section>
      {show && (
        <FilterBar
          setShow={setShow}
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />
      )}
    </main>
  );
};

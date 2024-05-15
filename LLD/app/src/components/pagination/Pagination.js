import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProdcuts] = useState();
  const [loading, setLoading] = useState(false);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await res.json();
    console.log(json);
    setProdcuts(json.products);
    setLoading(false);
    setNoOfPages(json.total / LIMIT);
  };
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <ProductCard key={products.id} {...product} />
        ))}
      </div>
      <div className="p-10 cursor-pointer">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}

        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            key={pN}
            className={
              "text-xl p-4 " + (pN === currentPage && "font-bold underline")
            }
            onClick={() => setCurrentPage(pN)}
          >
            {pN + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};

export default Pagination;

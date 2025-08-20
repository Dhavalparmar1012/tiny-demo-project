import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data.js";
import ProductCard from "../components/ProductCard.js";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  // Update search params only when search or category have a value
  useEffect(() => {
    const params = {};

    if (search) params.q = search;
    if (category) params.category = category;
    setSearchParams(params);
  }, [search, category, setSearchParams]);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
  );

  return (
    <div>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

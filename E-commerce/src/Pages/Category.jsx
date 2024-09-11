


import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


function UseEffect() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  };

  const searched = products?.filter(
    (data) => data.title.toLowerCase().indexOf(search) !== -1
  );

  return (
    <div>
      <input style={{width:"200px", height:"30px", margin:"10px 10px",backgroundColor:"#CCCCCC" ,color:"black", borderRadius:"5px",padding:"2px 6px"}}
        placeholder="Search"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searched.map((data) => (
        <Link key={data.id} to={`/product/${data.id}`}>
          
          <div style={{display:"flex",width:"100%",alignItems:"center", backgroundColor:"#CCCCCC", margin:"2px"}}>
            <img style={{width:"40px", height:"40px", margin:"10px 5px" }}src={data.image} />
            <h3 style={{margin:"10px" ,textAlign:"left", textDecoration:"none"}}>
              {data.id + ") "} {data.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UseEffect;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NotFound from "./NotFound";

function Product() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data=>", data);
        setProductInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <section style={{ color: "#4b5563", fontFamily: "sans-serif", overflow: "hidden" }}>
      <div style={{ padding: "6rem 1.25rem", maxWidth: "100%", margin: "0 auto" }}>
        {loading ? (
          <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>Loading ....</h1>
        ) : notFound ? (
          <NotFound title={"No Product Against this ID"} />
        ) : (
          <div style={{ display: "flex", maxWidth: "80%", margin: "0 auto" }}>
            <img
              alt="ecommerce"
              style={{
                width: "70%",
                maxWidth: "40%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "0.375rem",
              }}
              src={productInfo.image}
            />
            <div
              style={{
                width: "100%",
                maxWidth: "50%",
                paddingLeft: "2.5rem",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <h2 style={{ fontSize: "0.875rem", color: "#6b7280", letterSpacing: "0.1em" }}>
                {productInfo.title}
              </h2>
              <h1 style={{ color: "#111827", fontSize: "1.875rem", fontWeight: "500", marginBottom: "0.25rem" }}>
                {productInfo.category}
              </h1>
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <svg
                    style={{ width: "1rem", height: "1rem", color: "#4f46e5" }}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {/* Repeat SVGs with appropriate styles */}
                  <span style={{ color: "#4b5563", marginLeft: "0.75rem" }}>4 Reviews</span>
                </span>
                <span style={{ display: "flex", marginLeft: "0.75rem", paddingLeft: "0.75rem", borderLeft: "2px solid #e5e7eb", spaceX: "0.5rem" }}>
                  <a style={{ color: "#6b7280" }}>
                    <svg
                      style={{ width: "1.25rem", height: "1.25rem" }}
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a style={{ color: "#6b7280", textDecoration:"none"}}>
                    <svg
                      style={{ width: "1.25rem", height: "1.25rem", textDecoration:"none"  }}
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a style={{ color: "#6b7280" }}>
                    <svg
                      style={{ width: "1.25rem", height: "1.25rem" }}
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p style={{ lineHeight: "1.75" }}>
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div style={{ display: "flex", marginTop: "1.5rem", alignItems: "center", paddingBottom: "1.25rem", borderBottom: "2px solid #f3f4f6", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex" }}>
                  <span style={{ marginRight: "0.75rem" }}>Color</span>
                  <button style={{ border: "2px solid #d1d5db", borderRadius: "50%", width: "1.5rem", height: "1.5rem", outline: "none" }} />
                  <button style={{ border: "2px solid #d1d5db", marginLeft: "0.25rem", backgroundColor: "#4b5563", borderRadius: "50%", width: "1.5rem", height: "1.5rem", outline: "none" }} />
                  <button style={{ border: "2px solid #d1d5db", marginLeft: "0.25rem", backgroundColor: "#6366f1", borderRadius: "50%", width: "1.5rem", height: "1.5rem", outline: "none" }} />
                </div>
                <div style={{ display: "flex", marginLeft: "1.5rem", alignItems: "center" }}>
                  <span style={{ marginRight: "0.75rem" }}>Size</span>
                  <div style={{ position: "relative" }}>
                    <select
                      style={{
                        borderRadius: "0.375rem",
                        border: "1px solid #d1d5db",
                        padding: "0.5rem 0.75rem",
                        appearance: "none",
                        outline: "none",
                        textAlign: "center",
                        color: "#6b7280",
                      }}
                    >
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span style={{ position: "absolute", right: "0", top: "0", height: "100%", width: "2.5rem", textAlign: "center", color: "#6b7280", pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg
                        style={{ width: "1rem", height: "1rem" }}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "1.5rem", alignItems: "center", paddingBottom: "1.25rem", borderBottom: "2px solid #f3f4f6", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "500", color: "#111827" }}>$58.00</span>
                <button style={{ marginLeft: "auto", backgroundColor: "#4f46e5", color: "#ffffff", border: "none", padding: "0.5rem 1.5rem", cursor: "pointer", borderRadius: "0.375rem", outline: "none", transition: "background-color 0.3s" }}>Button</button>
                <button style={{ borderRadius: "50%", width: "2.5rem", height: "2.5rem", backgroundColor: "#e5e7eb", padding: "0", border: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#6b7280", marginLeft: "1rem" }}>
                  <svg
                    style={{ width: "1.25rem", height: "1.25rem" }}
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Product;
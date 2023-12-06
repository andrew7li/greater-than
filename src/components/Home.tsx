import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import ProductDescription from "./ProductDescription";
import TopNav from "./TopNav";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroTitle: HTMLElement | null =
        document.querySelector(".heroTitle");
      const heroText: HTMLElement | null = document.querySelector(".child");
      const heroButton: HTMLElement | null = document.querySelector(".button");
      const currentOp = 1 - window.scrollY / 350;

      if (heroTitle) heroTitle.style.opacity = currentOp.toString();
      if (heroText) heroText.style.opacity = currentOp.toString();
      if (heroButton) heroButton.style.opacity = currentOp.toString();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNav />

      {/* Hero section */}
      <section className="heroContainer">
        <div className="hero" />
        <h1 className="heroTitle">
          <img src="company.png" />
        </h1>
        <div className="child">
          <p>A new era. Where iconic design meets premium performance.</p>
          <p>Let's work out safely together.</p>
        </div>
        <div className="button" onClick={() => navigate("/buy")}>
          Buy Now
        </div>
      </section>

      {/* <Home /> */}
      <ProductDescription />
      {/* <Product /> */}
    </>
  );
}

import "./Product.scss";

export default function Product() {
  return (
    <section id="alternateSection">
      <div className="videoContainer">
        {/* controls autoPlay muted loop prop  */}
        <video width="50%" height="75%" controls>
          <source src="product.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

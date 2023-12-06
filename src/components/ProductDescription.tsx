import "./ProductDescription.scss";

export default function ProductDescription() {
  return (
    <section id="alternateSection">
      <div className="attributesContainer">
        <div className="attributeContainer">
          <img
            src="https://www.bostondynamics.com/wp-content/uploads/2023/06/Mobility-Icon.svg"
            className="icon"
          />
          <h1>Mobility</h1>
          <p>
            Portable, light-weight device that can be taken anywhere. Able to be
            attached both as clip-on and as a magnet.
          </p>
        </div>
        <div className="attributeContainer">
          <img
            src="https://www.bostondynamics.com/wp-content/uploads/2023/06/Dexterity-Icon-v2-1.svg"
            className="icon"
          />
          <h1>User Friendly</h1>
          <p>
            Simple and intuitive controls makes it easy for everyone to learn,
            regardless of technology experience.
          </p>
        </div>
        <div className="attributeContainer">
          <img
            src="https://www.bostondynamics.com/wp-content/uploads/2023/06/Intelligence-Icon.svg"
            className="icon"
          />
          <h1>Intelligence</h1>
          <p>
            State-of-the-art computer vision technology enables accurate and
            precise workout surveillance regardless of surrounding.
          </p>
        </div>
      </div>
    </section>
  );
}

import "./style.css";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src="../public/image.png" />
        </div>
        <div className="category">
          <div className="title">The Catalyzer</div>
          <div className="text">
            <p>
              Photo booth fam kinfolk cold-pressed sriracha leggings
              jianbingmicrodosing tousled waistcoat.
            </p>
          </div>

          <div className="footer">
            <div className="left">
              {" "}
              <p>Learn More</p>
            </div>
            <div className="right">
              <p>1.2k</p>
              <p>6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

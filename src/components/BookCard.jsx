import { link } from "react-router-dom";
function BookCard({ image, title, desc, link }) {
  return (
    <div className="card h-100 shadow">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{
          height: "350px",
          objectFit: "cover",
        }}
      />

      <div className="card-body text-center">
        <h4>{title}</h4>
        <p>{desc}</p>

        <Link to={link} className="btn btn-success">
          Read Now
        </Link>
      </div>
    </div>
  );
}

export default BookCard;

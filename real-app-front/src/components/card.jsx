import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card">
      <img src={bizImage} className="card-img-top" alt={bizName} />
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{bizPhone}</li>
          <li className="list-group-item">{bizAddress}</li>
        </ul>
        <span><Link to={`/mycards/update/${_id}`}>Edit</Link></span>
        {/* <Link to={`/mycards/update/${_id}`}>Edit</Link> */}
        <span><Link to={`/mycards/delete/${_id}`}>Del</Link></span>
        {/* <Link to={`/mycards/delete/${_id}`}>Del</Link> */}
      </div>
    </div>
  );
};

export default Card;

import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <Link to={`/mycards/show/${_id}`}>
      <div
        className="card object-fit-fill fs-6 mb-3"
        style={{ width: "18rem" }}
      >
        <img
          src={bizImage}
          className="card-img-top "
          style={{ height: "18rem" }}
          alt={bizName}
        />
        <div className="card-body">
          <h5 className="card-title">{bizName}</h5>
          <div
            className="md-4"
            style={{ height: "4.5rem", overflow: "hidden" }}
          >
            <h6 className="card-subtitle mb-2 text-body-secondary text-center">
              Description:
            </h6>
            <p className="card-text">{bizDescription}</p>
          </div>
          <ul className="list-group list-group-flush mt-2">
            <h6 className="card-subtitle mb-2 text-body-secondary text-center">
              Phone:
            </h6>
            <li className="list-group-item">{bizPhone}</li>
            <h6 className="card-subtitle my-2 text-body-secondary text-center">
              Address:
            </h6>
            <li className="list-group-item">
              <div style={{ height: "4.5rem", overflow: "hidden" }}>
                {bizAddress}
              </div>
            </li>
          </ul>
          <div className="d-flex mt-2 fs-5">
            <div className="me-auto p-2">
              <Link to={`/mycards/update/${_id}`}>Edit</Link>
            </div>
            <div className=" my-2 ">
              <Link to={`/mycards/delete/${_id}`}>Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

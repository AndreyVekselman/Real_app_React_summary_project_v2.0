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
          <h6 className="card-subtitle mb-2 text-body-secondary text-center">
            Description:
          </h6>
          <p className="card-text">{bizDescription}</p>
          <ul className="list-group list-group-flush">
            <h6 className="card-subtitle mb-2 text-body-secondary text-center">
              Phone:
            </h6>
            <li className="list-group-item">{bizPhone}</li>
            <h6 className="card-subtitle mb-2 text-body-secondary text-center">
              Address:
            </h6>
            <li className="list-group-item">{bizAddress}</li>
          </ul>
          <div className="text-center fs-5">
            <span className="mx-auto p-2">
              <Link to={`/mycards/update/${_id}`}>Edit</Link>
            </span>
            <span className=" mx-auto p-2 ">
              <Link to={`/mycards/delete/${_id}`}>Delete</Link>
            </span>
          </div>
        </div>
      </div>
    </Link>

    // <div className="card">
    //   <img src={bizImage} className="card-img-top" alt={bizName} />
    //   <div className="card-body">
    //     <h5 className="card-title">{bizName}</h5>
    //     <p className="card-text">{bizDescription}</p>
    //     <ul className="list-group list-group-flush">
    //       <li className="list-group-item">{bizPhone}</li>
    //       <li className="list-group-item">{bizAddress}</li>
    //     </ul>
    //     <span><Link to={`/mycards/update/${_id}`}>Edit</Link></span>
    //     {/* <Link to={`/mycards/update/${_id}`}>Edit</Link> */}
    //     <span><Link to={`/mycards/delete/${_id}`}>Del</Link></span>
    //     {/* <Link to={`/mycards/delete/${_id}`}>Del</Link> */}
    //   </div>
    // </div>
  );
};

export default Card;

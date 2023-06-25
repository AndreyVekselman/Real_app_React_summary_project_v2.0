import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";

const CardShow = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();
  const card = useCard(id);
  useEffect(() => {
    if (!card) return;
    const { bizName, bizAddress, bizDescription, bizPhone, bizImage } = card;
  }, [card]);
  return (
    <div className="card object-fit-fill fs-6 mb-3" style={{ width: "18rem" }}>
      <img
        src={card.bizImage}
        className="card-img-top "
        style={{ height: "18rem" }}
        alt={card.bizName}
      />
      <div className="card-body">
        <h5 className="card-title">{card.bizName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary text-center">
          Description:
        </h6>
        <p className="card-text">{card.bizDescription}</p>
        <ul className="list-group list-group-flush">
          <h6 className="card-subtitle mb-2 text-body-secondary text-center">
            Phone:
          </h6>
          <li className="list-group-item">{card.bizPhone}</li>
          <h6 className="card-subtitle mb-2 text-body-secondary text-center">
            Address:
          </h6>
          <li className="list-group-item">{card.bizAddress}</li>
        </ul>
        {/* <div className="text-center fs-5">
          <span className="mx-auto p-2">
            <Link to={`/mycards/update/${_id}`}>Edit</Link>
          </span>
          <span className=" mx-auto p-2 ">
            <Link to={`/mycards/delete/${_id}`}>Delete</Link>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default CardShow;

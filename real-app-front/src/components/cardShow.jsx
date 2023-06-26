import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";

const CardShow = () => {
  const { id } = useParams();
  const card = useCard(id);
  useEffect(() => {
    if (!card) return;
  }, [card]);
  return (
    <>
      {card && (
        <Link to="/mycards">
          <div
            className="card object-fit-fill fs-6 m-auto mb-4 mt-4"
            style={{ width: "50rem" }}
          >
            <img
              src={card.bizImage}
              className="card-img-top "
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
                <h6 className="card-subtitle my-2 text-body-secondary text-center">
                  Address:
                </h6>
                <li className="list-group-item">{card.bizAddress}</li>
              </ul>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardShow;

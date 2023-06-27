import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeder";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title={<>Real Business Cards</>}
        description="Here shown a business cards"
      />

      <div className="row text-center fs-4 mb-4">
        <Link to="/create-card"> Create a new Card</Link>
      </div>
      <div className="row">
        {!cards.length ? (
          <p className="fs-4">
            No cards yet. Start using a Real <i className="bi bi-boxes"> App</i>
            . Create your first business Card!
          </p>
        ) : (
          cards.map((card) => (
            <div key={card._id} className="col">
              <Card card={card} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MyCards;

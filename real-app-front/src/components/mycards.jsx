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
        description="Here shown my business cards"
      />

      <div className="row">
        <Link to="/create-card"> Create a new Card</Link>
      </div>
      <div className="row">
        {!cards.length ? (
          <p>no card</p>
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

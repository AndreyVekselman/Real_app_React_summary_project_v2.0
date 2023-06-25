import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../services/cardService";

const CardsDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      navigate("/mycards");
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};

export default CardsDelete;

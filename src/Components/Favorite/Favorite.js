import React from "react";
import PageTitle from '../PageTitle/PageTitle'
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardRedux";
import Card from "../Card/Card";

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    return(
        <div>
      <PageTitle>Favorite Items</PageTitle>
      <p>This is the Favorite page.</p>
      <ul>
         {favoriteCards.map(card => (
            <Card key={card.id} {...card} />
            ))}
            </ul>
    </div>
  );
}

export default Favorite;
import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { COMMUNITIES_API, HOMES_API } from "../../constants";
import { Community, Home } from "../../types";

interface Props {
  community: Community;
  homes: Home[];
}

const CommunityComponent: FC<Props> = ({ community, homes }) => {
  const [averagePriceInCommunity, setAveragePriceInCommunity] =
    useState<number>(0);
  const [formattedPriceInCommunity, setFormattedPriceInCommunity] =
    useState<string>();

  // Calculate average price of all homes associated with that community
  const calculateAveragePrice = useCallback((homes: Home[]): number => {
    const totalPrice = homes.reduce((sum, home) => sum + home.price, 0);
    const averagePrice = totalPrice / homes.length;
    return averagePrice;
  }, []);

  // Format price with currency, and handle unexpected value
  const formatAveragePrice = useCallback(() => {}, []);

  useEffect(() => {
    // Call calculateAveragePrice function to calculate average price
    setAveragePriceInCommunity(calculateAveragePrice(homes));
    formatAveragePrice();
    console.log("community: ", community);
    console.log("homes", homes);
  }, [homes, calculateAveragePrice]);

  return (
    <li>
      <ul>Community Name: {community.name}</ul>
      <ul>
        <img src={community.imgUrl} alt={community.name} />
      </ul>
      <ul>Average price: {averagePriceInCommunity}</ul>
    </li>
  );
};

export default CommunityComponent;

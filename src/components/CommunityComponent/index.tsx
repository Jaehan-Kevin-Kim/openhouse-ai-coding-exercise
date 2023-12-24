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
  const [
    formattedAveragePriceInCommunity,
    setFormattedAveragePriceInCommunity,
  ] = useState<string>();

  // Calculate average price of all homes associated with that community
  const calculateAveragePrice = useCallback((homes: Home[]): number => {
    if (homes.length === 0) {
      return 0;
    }
    const totalPrice = homes.reduce((sum, home) => sum + home.price, 0);
    return totalPrice / homes.length;
  }, []);

  // Format price with currency, and handle unexpected value
  const formatAveragePrice = useCallback((averagePrice: number): string => {
    if (averagePrice === 0) {
      return "N/A";
    }

    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(averagePrice);
  }, []);

  useEffect(() => {
    // Get calculateAveragePrice function to calculate average price
    const averagePrice = calculateAveragePrice(homes);
    setAveragePriceInCommunity(averagePrice);

    const formattedAveragePrice = formatAveragePrice(averagePrice);
    setFormattedAveragePriceInCommunity(formattedAveragePrice);
    // setAveragePriceInCommunity(calculateAveragePrice(homes));
    // formatAveragePrice();
    console.log("community: ", community);
    console.log("homes", homes);
  }, [homes, calculateAveragePrice, formatAveragePrice, community]);

  return (
    <li>
      <ul>Community Name: {community.name}</ul>
      <ul>
        <img
          src={community.imgUrl}
          alt={community.name}
          width={300}
          height={300}
        />
      </ul>
      <ul>Average price: {formattedAveragePriceInCommunity}</ul>
    </li>
  );
};

export default CommunityComponent;

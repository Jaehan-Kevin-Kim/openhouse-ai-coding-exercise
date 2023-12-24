// import { css } from "@emotion/react";
import { css } from "@emotion/css";
import { Button, Card } from "antd";
import { FC, SyntheticEvent, useCallback, useEffect, useState } from "react";
import noImage from "../../assets/images/no-image.jpg";
import { Community, Home } from "../../types";
import {
  CardComponent,
  CardContainer,
  CardDescription,
  CardImage,
} from "./styles";

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
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);

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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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

  const handleNoImage = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.src = noImage;
    },
    [],
  );

  return (
    <CardContainer
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}>
      <CardComponent
        hoverable
        cover={
          <CardImage
            alt={community.name}
            src={community.imgUrl || noImage}
            onError={handleNoImage}
          />
        }>
        <Card.Meta
          title={
            <span
              className={css`
                color: #07424f;
              `}>
              {community.name}
            </span>
          }
          description={
            <CardDescription>
              Average Price: {formattedAveragePriceInCommunity}
            </CardDescription>
          }
        />
      </CardComponent>
      {isCardHovered && (
        <Button
          className={css`
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
          `}
          type="primary">
          Contact
        </Button>
      )}
    </CardContainer>
  );
};

export default CommunityComponent;

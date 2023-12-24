import { Col, Modal, Row, Skeleton } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CommunityComponent from "../../components/community";
import { COMMUNITIES_API, HOMES_API } from "../../constants";
import { Community, Home } from "../../types";
import { SpinnerContainer } from "./styles";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);

  const displayErrorModal = useCallback(() => {
    Modal.error({
      title: "Error",
      content: "An error occurred during loading data. Please try again later.",
      footer: (_, { OkBtn }) => (
        <>
          <OkBtn />
        </>
      ),
    });
  }, []);

  useEffect(() => {
    const getCommunityData = async () => {
      try {
        const { data }: { data: Community[] } = await axios.get(
          COMMUNITIES_API,
        );
        const sortedCommunities = data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setCommunities(sortedCommunities);
        setIsLoading(false);
      } catch (error) {
        console.error("Error for getting community data", error);
        displayErrorModal();
        setIsLoading(false);
      }
    };

    getCommunityData();
  }, [displayErrorModal]);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const { data }: { data: Home[] } = await axios.get(HOMES_API);
        setHomes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error for getting home data", error);
        displayErrorModal();
        setIsLoading(false);
      }
    };

    getHomeData();
  }, [displayErrorModal]);

  const homesByCommunityId = useCallback(
    (communityId: string) => {
      return homes.filter((home) => home.communityId === communityId);
    },
    [homes],
  );

  return (
    <>
      {isLoading && (
        <SpinnerContainer>
          <Skeleton active paragraph={{ rows: 15 }} />
        </SpinnerContainer>
      )}
      {!isLoading && (
        <div>
          <h1>Communities</h1>
          <Row gutter={[16, 16]}>
            {communities.map((community) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} key={community.id}>
                <CommunityComponent
                  community={community}
                  homes={homesByCommunityId(community.id)}></CommunityComponent>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default HomePage;

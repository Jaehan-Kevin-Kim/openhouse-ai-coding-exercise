import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CommunityComponent from "../../components/CommunityComponent";
import { COMMUNITIES_API, HOMES_API } from "../../constants";
import { Community, Home } from "../../types";
const HomePage = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const getCommunityData = async () => {
      try {
        const { data }: { data: Community[] } = await axios.get(
          COMMUNITIES_API,
        );
        const sortedCommunities = data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        // console.log(
        //   "get community result: ",
        //   data.sort((a, b) => a.name.localeCompare(b.name)),
        // );
        setCommunities(sortedCommunities);
      } catch (error) {
        console.error("Error for getting community data", error);
      }
    };

    getCommunityData();
  }, []);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const { data }: { data: Home[] } = await axios.get(HOMES_API);

        setHomes(data);
      } catch (error) {
        console.error("Error for getting home data", error);
      }
    };

    getHomeData();
  }, []);

  const homesByCommunityId = useCallback(
    (communityId: string) => {
      return homes.filter((home) => home.communityId === communityId);
    },
    [homes],
  );

  return (
    <div>
      <h1>Communities</h1>
      {communities.map((community) => (
        <CommunityComponent
          key={community.id}
          community={community}
          homes={homesByCommunityId(community.id)}
          // homes={homes.filter(home=>home.communityId === community.id)}
        ></CommunityComponent>
      ))}
      {/* <CommunityComponent></CommunityComponent> */}
    </div>
  );
};

export default HomePage;

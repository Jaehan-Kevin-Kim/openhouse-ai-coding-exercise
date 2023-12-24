import axios from "axios";
import { useEffect } from "react";
import { COMMUNITIES_API } from "../../constants";

const Community: React.FC = () => {
  useEffect(() => {
    getCommunityData();
  }, []);

  const getCommunityData = async () => {
    const { data } = await axios.get(COMMUNITIES_API);
    console.log("get community result: ", data);
  };

  return <div>Community</div>;
};

export default Community;

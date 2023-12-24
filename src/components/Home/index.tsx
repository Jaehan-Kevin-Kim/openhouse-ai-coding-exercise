import axios from "axios";
import { useEffect } from "react";
import { HOMES_API } from "../../constants";

const Home = () => {
  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const { data } = await axios.get(HOMES_API);
    console.log("get home result: ", data);
  };

  return <div>Home</div>;
};

export default Home;

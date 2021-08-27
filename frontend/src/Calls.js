import axios from "axios";
import { useEffect, useState } from "react";

function Calls() {
  const [data, setData] = useState([
    {
      mainImg: "",
      imgs: [],
      title: "",
      date: "",
      description: "",
      history: "",
      technologies: "",
      time: 0,
      link: "",
    },
  ]);
  const api = axios.create({
    baseURL: "https://radiant-brushlands-74044.herokuapp.com/api/",
  });

  const getData = async (setter, url) => {
    try {
      const { data } = await api.get(url);
      setter(data);
      return;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getData(setData, "get_all_projects/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
  };
}

export default Calls;

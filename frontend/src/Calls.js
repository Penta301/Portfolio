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
    baseURL: "http://127.0.0.1:8000/api/",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getData(setData, "get_all_projects/");
  }, []);

  return {
    data,
  };
}

export default Calls;

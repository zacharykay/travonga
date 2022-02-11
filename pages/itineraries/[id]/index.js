import { useState, useEffect } from "react";

import Itinerary from "../../../components/itineraries/Itinerary";
const { itineraries } = require("../../../data/itineraries.json");

const Attraction = ({ data }) => {
  // const [ size, setSize ] = useState(null);

  // const checkSize = () => {
  //   setSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   checkSize();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);

  //   return () => {
  //     window.removeEventListener("resize", checkSize);
  //   };
  // }, []);

  return <Itinerary data={data}
    // size={size}
  />;
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = itineraries.find((item) => item.id === id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = itineraries.map((place) => place.id);
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });
  return { paths, fallback: false };
};

export default Attraction;

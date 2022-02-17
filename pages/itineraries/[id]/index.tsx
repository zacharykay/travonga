// import { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import Itinerary from "../../../components/itineraries/Itinerary";
const { itineraries } = require("../../../data/itineraries.json");

interface Props {
  data: any;
}

const Attraction = (props: Props) => {
  const { data } = props;
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

  return (
    <Itinerary
      data={data}
      // size={size}
    />
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string | string[] | undefined = context.params!.id;
  const data = itineraries.find((item: any) => item.id === id);
  return {
    props:
      {
        data,
      },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = itineraries.map((place: any) => place.id);
  const paths = ids.map((id: string | number) => {
    return { params: { id: id.toString() } };
  });
  return { paths, fallback: false };
};

export default Attraction;

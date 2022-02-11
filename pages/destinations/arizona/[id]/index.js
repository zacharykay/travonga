import AttractionsGuide from "../../../../components/attraction_guides/AttractionsGuide";
const { attractionGuides } = require("../../../../data/attractions/arizona.json");

const Attraction = ({ data }) => {
  return <AttractionsGuide data={data} />;
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = attractionGuides.find((item) => item.id === id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = attractionGuides.map((place) => place.id);
  const paths = ids.map((id) => {
    return { params: { id: id.toString() } };
  });
  return { paths, fallback: false };
};

export default Attraction;

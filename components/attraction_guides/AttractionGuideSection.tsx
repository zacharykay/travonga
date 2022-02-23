import { FC } from "react";

const { default: HiddenContent } = require("../widgets/HiddenContent");

interface Props {
  anchor?: string;
  heading: string;
  hidden_content?: string;
  children: string;
}

const AttractionGuideSection: FC<Props> = ({
  anchor,
  heading,
  hidden_content,
  children,
}) => {
  return (
    <section className="destination_section">
      <a className="anchor" id={anchor} />
      <h2 className="left_heading destination_section_heading">{heading}</h2>
      <div dangerouslySetInnerHTML={{ __html: children }} />
      {hidden_content && <HiddenContent hidden_content={hidden_content} />}
    </section>
  );
};

export default AttractionGuideSection;

import React, { useState, useRef, FC } from "react";

interface Props {
  hidden_content: string;
}

const HiddenContent: FC<Props> = (props) => {
  const { hidden_content } = props;
  const ref = useRef<HTMLDivElement>(null);

  const [ readMore, setReadMore ] = useState<string>("Read More...");

  const revealContent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;
    const hiddenContent = ref.current;

    if (hiddenContent) {
      hiddenContent.classList.toggle("hidden_content");

      if (text === "Read More...") {
        setReadMore("Read Less...");
      } else {
        setReadMore("Read More...");
      }
    }
  };

  return (
    <React.Fragment>
      <div
        className="hidden_content"
        ref={ref}
        dangerouslySetInnerHTML={{ __html: hidden_content }}
      />
      <button type="button" className="collapsible_content" onClick={revealContent}>
        {readMore}
      </button>
    </React.Fragment>
  );
};

export default HiddenContent;

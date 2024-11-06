import React from "react";
import { contentData } from "../Layout";
import Accordion from "./Accordion";
import { AccordionUpArrow } from "./Icon";

export const AccordionBody = (): React.JSX.Element => {
  return (
    <div className="-[300px]">
      <Accordion
        children={"Accordion"}
        content={contentData.content}
        Icon={<AccordionUpArrow />}
      />
    </div>
  );
};

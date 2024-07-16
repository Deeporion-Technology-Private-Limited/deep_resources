import Accordion from ".";
import { contentData } from "../types";
import { UpArrow } from "./Icon/Icon";

export const AccordionBody = () => {
  return (
    <div className="-[300px]">
      <Accordion
        children={"Accordion"}
        content={contentData.content}
        Icon={<UpArrow />}
      />
    </div>
  );
};

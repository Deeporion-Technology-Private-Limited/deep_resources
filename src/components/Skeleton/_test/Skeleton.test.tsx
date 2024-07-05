import { render } from "@testing-library/react";
import {
  Skeleton,
  SkeletonImage,
  SkeletonLayout,
  SkeletonLoginForm,
  SkeletonShoppingCard,
} from "..";
// import { ButtonSize, SkeletonVariant } from "@/components/Button/type";

describe("Testing Skeleton Component", () => {
  it("Renders Skeleton with Default values", () => {
    render(<Skeleton />);
  });

  it("Renders SkeletonLayout with Default values", () => {
    render(<SkeletonLayout />);
  });
  it("Renders SkeletonShoppingCard with Default values", () => {
    render(<SkeletonShoppingCard />);
  });

  it("Renders SkeletonLoginForm with Default values", () => {
    render(<SkeletonLoginForm />);
  });

  it("Renders SkeletonImage with Default values", () => {
    render(<SkeletonImage />);
  });
});

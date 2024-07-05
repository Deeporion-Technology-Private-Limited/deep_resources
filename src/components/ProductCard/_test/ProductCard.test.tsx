import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "..";

describe("ProductCard Component", () => {
  it("renders ProductCard with productCode, productDetails, productSpecifications", () => {
    render(
      <ProductCard
        productCode={"00123456"}
        productDetails={{ productDetail: "Product Detail" }}
        productSpecifications={{
          fabric: "Cotton",
          fabricType: "Cotton",
          hemline: "Flared",
          knitOrWoven: "Woven",
          length: "Maxi",
          mainTrend: "Bohemian",
          neck: "V-Neck",
          occasion: "Daily",
          color: "Black",
          style: "Dress",
        }}
      />
    );

    let x = screen.getByRole("button");
    fireEvent.click(x);
  });
});

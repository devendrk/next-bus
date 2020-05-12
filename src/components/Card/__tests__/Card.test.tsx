import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Card from "..";

describe("<Card />", () => {
  const stopName = "stopName";
  const stopNumber = "V1056";
  const nextBuses = [
    {
      headsign: "Helsinki",
      scheduledArrival: 4200,
      trip: { route: { shortName: "abc", id: "abc" } },
    },
  ];
  it("Card", () => {
    const { container } = render(
      <Card stopName={stopName} stopNumber={stopNumber} nextBuses={nextBuses} />
    );
    expect(container).not.toBeNull();
  });
});

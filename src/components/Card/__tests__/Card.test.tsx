import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Card from "..";
describe("<MethodCard />", () => {
  const stopName = "stopName";
  const stopNumber = "V1056";
  const nextBuses = [{ headsign: "Helsinki", scheduledArrival: 4200 }];
  it("method card", () => {
    const { container } = render(
      <Card stopName={stopName} stopNumber={stopNumber} nextBuses={nextBuses} />
    );

    expect(container).not.toBeNull();
  });
});

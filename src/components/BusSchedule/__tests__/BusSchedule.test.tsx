import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import BusSchedule from "..";

describe("<Card />", () => {
  const nextBuses = [
    {
      headsign: "Helsinki",
      scheduledArrival: 4200,
      trip: { route: { shortName: "abc", id: "abc" } },
    },
  ];
  it("BusSchedule", () => {
    const { container } = render(<BusSchedule nextBuses={nextBuses} />);
    expect(container).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});

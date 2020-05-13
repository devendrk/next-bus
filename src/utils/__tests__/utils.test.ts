import { convertTimeFormat } from "..";

describe("convert seconds to ISOString", () => {
  test("return string", () => {
    const result = convertTimeFormat(700);
    expect(typeof result).toBe("string");
  });

  test("should return valid time", () => {
    const result = convertTimeFormat(51060);
    expect(result).toBe("14:11");
  });

  test("should return 00:00", () => {
    const result = convertTimeFormat(0);
    expect(result).toBe("00:00");
  });
});

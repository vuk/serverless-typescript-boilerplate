import { handler as info } from "./info";
import { ApiGatewayResponse } from "../interfaces/api-gateway.interface";

describe("Testing info function", () => {
  it("should return current version of service", async () => {
    const value: ApiGatewayResponse = await info();
    expect(JSON.parse(value.body).version).toEqual("1.0.0");
  });
});

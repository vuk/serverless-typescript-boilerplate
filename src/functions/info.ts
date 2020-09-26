import * as pjson from "../../package.json";
import { ApiGatewayResponse } from "../interfaces/api-gateway.interface";

export const handler = async (): Promise<ApiGatewayResponse> => {
  return {
    statusCode: "200",
    body: JSON.stringify({
      version: pjson.version,
    }),
  };
};

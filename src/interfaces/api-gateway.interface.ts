export interface ApiGatewayResponse {
  body: string;
  statusCode: string;
  headers?: { [name: string]: string };
}

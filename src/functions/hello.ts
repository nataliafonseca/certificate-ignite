import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event) => {
  const { name } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: `hello ${name}` }),
  };
};

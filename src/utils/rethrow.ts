import { nay } from "../terminal/nay.js";

const rethrow = (error: Error): never => {
  nay(`Unexpected error! Rethrowing...`);
  throw error;
};

export { rethrow };

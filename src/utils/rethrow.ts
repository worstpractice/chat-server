import { nay } from "./nay.js";

const rethrow = (error: Error): never => {
  nay(`Unexpected error! Rethrowing...`);
  throw error;
};

export { rethrow };

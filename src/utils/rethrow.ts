import { nay } from "./nay";

const rethrow = (error: Error): never => {
  nay(`Unexpected error! Rethrowing...`);
  throw error;
};

export { rethrow };

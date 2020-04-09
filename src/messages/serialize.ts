import { nay } from "../utils/nay.js";
import { rethrow } from "../utils/rethrow.js";

const serialize = (message: Outbox.Message): string | never => {
  let serialized;
  try {
    serialized = JSON.stringify(message);
  } catch (error) {
    error instanceof TypeError ? nay(`Serialization failed!`) : rethrow(error);
  } finally {
    return serialized as string;
  }
};

export { serialize };

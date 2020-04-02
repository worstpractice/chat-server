import { nay } from "./nay.js";
import { rethrow } from "./rethrow.js";

const serialize = (message: Outbox.Message): string | never => {
  let serialized;
  try {
    serialized = JSON.stringify(message);
  } catch (error) {
    error instanceof SyntaxError ? nay(`Serialization failed!`) : rethrow(error);
  } finally {
    return serialized as string;
  }
};

export { serialize };

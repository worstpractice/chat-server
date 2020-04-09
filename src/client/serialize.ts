import { isTypeError } from "../predicates/errors/isTypeError";
import { Outbox } from "../typings/declarations";
import { count } from "../utils/console";
import { nay } from "../utils/nay";
import { rethrow } from "../utils/rethrow";

const serialize = (message: Outbox.Message): string => {
  count(`client: serialize`);
  let serialized = "";
  try {
    serialized = JSON.stringify(message);
  } catch (error) {
    isTypeError(error) ? nay(`Serialization failed!`, error) : rethrow(error);
  } finally {
    return serialized;
  }
};

export { serialize };

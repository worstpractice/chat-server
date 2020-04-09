import { ServerSettings } from "../typings/declarations";
import { count } from "../utils/console";

const deriveURL = (serverSettings: ServerSettings): string => {
  count(`client: deriveServerURL`);
  const { protocol, domain, port } = serverSettings;
  return `${protocol}${domain}:${port}`;
};

export { deriveURL };

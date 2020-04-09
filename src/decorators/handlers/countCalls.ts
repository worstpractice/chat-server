import { count } from "../../utils/console";

const countCalls: ProxyHandler<Function> = {
  apply(target: Function, thisArg: Object, argumentsList: unknown[]) {
    count(`${thisArg.constructor.name}: ${target.name}`);
    return target.apply(thisArg, argumentsList);
  },
  construct(original: any, argumentsList: unknown[], _proxied: any) {
    count(`${original.name}: constructor`);
    return new original(...argumentsList);
  },
};

export { countCalls };

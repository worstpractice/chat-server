import { interceptNewInstances } from "./handlers/interceptNewInstances";

const classDecorator = (targetClass: any) => {
  const Proxied = new Proxy(targetClass, interceptNewInstances);
  return Proxied;
};

export { classDecorator as AutoBind };

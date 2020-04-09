import { countCalls } from "./handlers/countCalls";

const prototypeDecorator = (targetClass: any) => {
  const classPrototype = targetClass.prototype;
  const descriptors = Object.getOwnPropertyDescriptors(classPrototype);

  for (let descriptor in descriptors) {
    const method: Function = classPrototype[descriptor];
    classPrototype[descriptor] = new Proxy(method, countCalls);
  }

  const decoratedClass = new Proxy(targetClass, countCalls);
  return decoratedClass;
};

export { prototypeDecorator as CountCalls };

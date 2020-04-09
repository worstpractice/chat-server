const autoBindInstance = (instance: any) => {
  const classPrototype = instance.constructor.prototype;
  const descriptors = Object.getOwnPropertyDescriptors(classPrototype);

  for (let descriptor in descriptors) {
    instance[descriptor] = classPrototype[descriptor].bind(instance);
  }
  return instance;
};

const interceptNewInstances = {
  construct(original: any, argumentsList: unknown[], _proxied: any) {
    const that = new original(...argumentsList);
    const boundThat = autoBindInstance(that);
    return boundThat;
  },
};

export { interceptNewInstances };

const isTypeError = (error: Error): error is TypeError => {
  return error instanceof TypeError;
};

export { isTypeError };

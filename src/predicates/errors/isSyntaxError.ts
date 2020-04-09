const isSyntaxError = (error: Error): error is SyntaxError => {
  return error instanceof SyntaxError;
};

export { isSyntaxError };

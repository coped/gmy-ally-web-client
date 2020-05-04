export default (function Messages() {
  // Provides various pre-defined messages in the form of a module

  const create = (type, message) => ({
    type: type,
    message: message,
  });

  const generalError = {
    type: "warning",
    message: "An error occurred. Please try again.",
  };

  const connectionError = {
    type: "warning",
    message: "Something went wrong. Please check your connection and try again."
  }
  return { create, generalError, connectionError };
})();

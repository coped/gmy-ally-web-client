export default (function Messages() {
  const create = (type, message) => ({
    type: type,
    message: message,
  });

  const generalError = {
    type: "warning",
    message: "An error occurred. Please try again.",
  };

  return { create, generalError };
})();

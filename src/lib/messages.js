export default (function Messages() {
  // Provides various pre-defined messages in the form of a module

  const NewMessage = ({ type, message }) => {
    return { type, message };
  };

  const create = ({ type, message }) => NewMessage({ type, message });

  const generalError = create({
    type: "warning",
    message: "An error occurred. Please try again.",
  });

  const connectionError = create({
    type: "warning",
    message:
      "Something went wrong. Please check your connection and try again.",
  });

  return { create, generalError, connectionError };
})();

// Provides various pre-defined messages in the form of a module

const create = ({ type, message }) => ({ type, message });

export const Messages = {
  create,
  generalError: create({
    type: "warning",
    message: "An error occurred. Please try again.",
  }),
  connectionError: create({
    type: "warning",
    message:
      "Something went wrong. Please check your connection and try again.",
  }),
};

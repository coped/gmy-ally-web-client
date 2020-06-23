// Makes RESTful asynchronous fetch requests using provided path, data, and authorization.
// Returns a promise

export const AsyncRequest = {
  get: ({ path, authorization = null }) => {
    const options = {
      method: "GET",
    };
    return createRequest(path, buildOptions(options, authorization));
  },
  post: ({ path, data = null, authorization = null }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    return createRequest(path, buildOptions(options, authorization));
  },
  patch: ({ path, data = null, authorization = null }) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
    };
    return createRequest(path, buildOptions(options, authorization));
  },
  destroy: ({ path, authorization = null }) => {
    const options = {
      method: "DELETE",
    };
    return createRequest(path, buildOptions(options, authorization));
  },
};

const baseOptions = {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

const buildOptions = (options, authorization) => {
  const thisRequestOptions = { ...baseOptions, ...options };
  thisRequestOptions.headers["authorization"] = authorization;
  return thisRequestOptions;
};

const createRequest = (path, options) => {
  const request = new Request(path, options);
  return fetch(request);
};

export default (function AsyncRequest() {
  // Makes RESTful asynchronous fetch requests using provided path, data, and authorization.
  // Returns a promise

  const basicOptions = {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const buildOptions = (options, authorization) => {
    const thisRequestOptions = { ...basicOptions, ...options };
    thisRequestOptions.headers["Authorization"] = authorization;
    return thisRequestOptions;
  };

  const createRequest = (path, options) => {
    const request = new Request(path, options);
    return fetch(request);
  };

  const get = (path, authorization = null) => {
    const options = {
      method: "GET",
    };
    return createRequest(path, buildOptions(options, authorization));
  };

  const post = (path, data = null, authorization = null) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    return createRequest(path, buildOptions(options, authorization));
  };

  const patch = (path, data, authorization = null) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
    };
    return createRequest(path, buildOptions(options, authorization));
  };

  const destroy = (path, data, authorization = null) => {
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
    };
    return createRequest(path, buildOptions(options, authorization));
  };

  return { get, post, patch, destroy };
})();

export default (function AsyncRequest() {
  // Makes a fetch request using provided path, data, and authorization. Returns a promise

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

  const get = (path, authorization = null) => {
    const options = {
      method: "GET",
    };
    const request = new Request(path, buildOptions(options, authorization));
    return fetch(request);
  };

  const post = (path, data = null, authorization = null) => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const request = new Request(path, buildOptions(options, authorization));
    return fetch(request);
  };

  const patch = (path, data, authorization = null) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
    };
    const request = new Request(path, buildOptions(options, authorization))
    return fetch(request);
  };

  const deleteRequest = (path, data, authorization = null) => {
    const options = {
      method: "DELETE",
      body: JSON.stringify(data),
    };
    const request = new Request(path, buildOptions(options, authorization))
    return fetch(request);
  };

  return { get, post, patch, deleteRequest };
})();

export default (function AsyncRequest() {
  const get = async (path, authorization = null) => {
    const body = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
    };
    const request = new Request(path, body);
    const response = await fetch(request);
    return await response.json();
  };

  const post = async (path, data = null, authorization = null) => {
    const body = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };
    const request = new Request(path, body);
    const response = await fetch(request);
    return await response.json();
  };

  const patch = async (path, data, authorization = null) => {
    const body = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };
    const request = new Request(path, body);
    const response = await fetch(request);
    return await response.json();
  };

  const deleteRequest = async (path, data, authorization = null) => {
    const body = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };
    const request = new Request(path, body);
    const response = await fetch(request);
    return await response.json();
  };

  return { get, post, patch, deleteRequest };
})();

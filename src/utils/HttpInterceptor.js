const getEndpoint = (url, customUrl) => {
  if (customUrl) return customUrl;

  const endPoint = 'https://gorest.co.in/public/v1';
  return endPoint + url;
}

module.exports = {
  get: function (url, headers, customUrl, cancelRequest) {

    const apiUrl = getEndpoint(url, customUrl);

    let init = { method: 'GET' };
    if (headers) init.headers = headers;
    if (cancelRequest) init.signal = cancelRequest

    return fetch(apiUrl, init)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  },
  handleResponse: function (response) {
    // if (response.status == 401) {
    //     // Unauthorized
    //     document.getElementById('unauthorized-box').style.display = 'block';
    // }
    return response.json().then(res => {
      if (!response.ok) {
        return { error: true, status: response.status, data: res };
      }
      return res;
    }).catch((err) => {
      if (response.status == 201 || response.status == 204) return { success: true };
      return { error: true, status: response.status };
    });
  },
  handleError: function (error) {
    if (error.message == 'Unexpected token S in JSON at position 0') {
      return true;
    }
    console.log("API ERROR ::: ", JSON.stringify(error));
    return {
      error: true,
      message: error
    };
  }
}
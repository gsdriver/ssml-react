
module.exports = {
  fetch: function(url) {
    return new Promise((resolve, reject) => {
      // select http or https module, depending on reqested url
      const lib = url.startsWith('https') ? require('https') : require('http');
      const request = lib.get(url, (response) => {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error('Error calling SSML server: ' + response.statusCode));
        }

        const body = [];
        response.on('data', (chunk) => body.push(chunk));
        response.on('end', () => resolve(body.join('')));
      });

      // handle connection errors of the request
      request.on('error', (err) => reject(err))
    })
  },
};

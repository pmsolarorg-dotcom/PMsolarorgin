
// Minimal webhook placeholder
exports.handler = async function(event) {
  if (event.httpMethod === 'GET') {
    return { statusCode: 200, body: 'webhook-verify' };
  }
  if (event.httpMethod === 'POST') {
    return { statusCode: 200, body: 'event-received' };
  }
  return { statusCode: 405, body: 'Method Not Allowed' };
};

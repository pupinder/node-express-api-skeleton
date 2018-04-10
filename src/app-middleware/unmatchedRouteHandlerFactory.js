'use strict';

function unmatchedRouteHandler(request, response, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}

module.exports = function unmatchedRouteHandlerFactory() {
  return unmatchedRouteHandler();
};

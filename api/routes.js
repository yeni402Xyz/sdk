module.exports = function (app) {
  app.get("/health", (_, res) => res.send("ok"));
};

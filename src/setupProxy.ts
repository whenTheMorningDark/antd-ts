import { createProxyMiddleware, RequestHandler } from "http-proxy-middleware";

module.exports = function (app: { use: (arg0: RequestHandler) => void }) {
  app.use(createProxyMiddleware("/api", { target: "http://localhost:8888/" }));
};

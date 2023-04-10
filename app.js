import http from "http";
import url from "url";
import serverGetRes from "./sevrerGetRes.js";

class Server {
  constructor(port) {
    this.port = port;
  }

  set port(value) {
    if (typeof value !== "number") {
      console.log("숫자만 입력할 수 있습니다.");
    } else {
      this._port = value;
    }
  }

  serverStart() {
    http
      .createServer((req, res) => {
        const serverUrl = url.parse(req.url, true);
        const urlPathName = serverUrl.pathname;
        console.log(urlPathName);
        const urlMethod = req.method;

        if (urlPathName === "/" && urlMethod === "GET") {
          serverGetRes(res, "index.html", 200, "text/html");
        } //serverStart의 첫 if문 끝
      })
      .listen(this._port, (err) => {
        if (err) {
          console.error(`${this._port}가 작동하지 않습니다.`, err);
        } else {
          console.log(this._port, "가 정상작동 합니다.");
        }
      }); //createServer 끝
  }
}

new Server(3030).serverStart();

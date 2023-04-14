import fs from "fs";

function serverGetRes(res, pathN, statusCode, contentTpye) {
  fs.readFile(pathN, (err, data) => {
    if (err) {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.write("500인터넷 에러");
      res.end();
    } else {
      res.writeHead(statusCode, {
        "content-type": contentTpye + "; charset=utf-8",
      });
      res.write(data);
      res.end();
    }
  });
}

export default serverGetRes;

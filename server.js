const express = require("express");
const app = express();
const MBTiles = require("mbtiles");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.options("*", cors());

let port = 3000;

const mbtilesLocation = __dirname + "/tiles/tiles.mbtiles";

new MBTiles(mbtilesLocation, (err, mbtiles) => {
  if (err) {
    console.log("ERR", err);
  }

  app.get("/:z/:x/:y", (req, res) => {
    const { z, x, y } = req.params;

    console.log("z, x, y", z, x, y);

    mbtiles.getTile(z, x, y, (err, data, headers) => {
      if (err) {
        console.log(err);
        res.status(404);
        res.end();
      } else {
        res.writeHead(200, headers);
        res.end(data);
      }
    });
  });
});

app.listen(port);

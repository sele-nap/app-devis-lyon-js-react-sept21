const express = require("express");
const next = require("next");
const { delBasePath } = require("next/dist/shared/lib/router/router");
const db = require("./db");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use("/uploads", express.static(__dirname + "/public/uploads"));

  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

setInterval(async () => {
  const date = new Date(Date.now());
  date.setDate(date.getDate() - 30);
  console.log(date);
  // const maxWaitingTime = 30;
  // const dateDelete = dateToday.setDate(dateToday.getDate() - maxWaitingTime);
  // console.log(dateDelete);
  await db.estimate.deleteMany({
    where: {
      status: { in: ["WAITING_FOR_VALIDATION"] },
      waitingDate: {
        lte: date,
      },
    },
  });
}, 6000);

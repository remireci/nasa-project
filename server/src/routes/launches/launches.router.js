const express = require("express");
const { 
    httpGetAlllaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAlllaunches);

launchesRouter.post("/", httpAddNewLaunch);

launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
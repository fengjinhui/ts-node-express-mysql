import express from "express";
import path from "path";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

const cookieParser = require("cookie-parser");

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(errorNotFoundHandler);
app.use(errorHandler);

export default app;

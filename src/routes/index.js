const { Router } = require("express");
const router = Router();
const testRuleRouter = require("./test.routes.js");
const userRouter = require("./user.routes.js");
const taskRouter = require("./task.routes.js")
const uploadRouter = require("./upload.routes.js")
router.use("/test", testRuleRouter);
router.use("/users", userRouter);
router.use("/file", uploadRouter);
router.use("/tasks", taskRouter);
module.exports = router;


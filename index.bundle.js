/**
 * Runs the bundled version of the action.
 * This is preferred way to run, since it bundles all the dependencies required.
 */

// Why the userAgent you ask?
// - Makes webpack happy.
// - Doesn't impact our action.
// - Speeds up the release/load time of our action.
global.navigator = { userAgent: "nodejs-runtime" }

const { run } = require("./bundle/index.js");

run();

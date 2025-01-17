#!/usr/bin/env node
/* eslint-disable no-undef */

import fs from "fs";
import path from "path";
import parseCommands from "./lib/util/parseCommands.js";
import executedCommand from "./lib/util/executedCommand.js";

let fileLocate = null;

/**
 * @returns {boolean}
 */
const parseArgs = () => {
  const args = process.argv;

  if (args.length < 3) {
    console.log("Require file args, .topan");
    return false;
  }

  fileLocate = args[2];
  if (!fs.existsSync(fileLocate)) {
    console.log(`File "${args[2]}" not found, please verify file location`);
    return false;
  }

  const fileExtension = path.extname(fileLocate);
  if (fileExtension !== ".topan") {
    console.log("Only .topan files are allowed");
    return false;
  }

  return true;
};

if (!parseArgs()) {
  process.exit(1);
}

const input = fs.readFileSync(fileLocate, "utf-8");

const result = parseCommands(input);
executedCommand(result);

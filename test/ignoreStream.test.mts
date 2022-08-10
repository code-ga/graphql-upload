// @ts-check

import { doesNotThrow, strictEqual } from "assert";

import ignoreStream from "../src/ignoreStream.mjs";
import CountReadableStream from "./CountReadableStream.mjs";

/**
 * Adds `ignoreStream` tests.
 * @param {import("./testClass").default} tests Test director.
 */
export default (tests: import("./testClass.mjs").default) => {
  tests.add("`ignoreStream` ignores errors.", () => {
    doesNotThrow(() => {
      const stream = new CountReadableStream();
      ignoreStream(stream);
      stream.emit("error", new Error("Message."));
    });
  });

  tests.add("`ignoreStream` resumes a paused stream.", () => {
    const stream = new CountReadableStream();
    stream.pause();
    ignoreStream(stream);
    strictEqual(stream.isPaused(), false);
  });
};

// @ts-check

import { doesNotThrow, throws } from "assert";
import { parseValue } from "graphql";

import GraphQLUpload from "../src/GraphQLUpload.mjs";
import Upload from "../src/Upload.mjs";
import TestDirector from "./testClass.mjs";
/**
 * Adds `GraphQLUpload` tests.
 * @param {import("./testClass").default} tests Test director.
 */
export default (tests: TestDirector) => {
  tests.add("`GraphQLUpload` scalar `parseValue` with a valid value.", () => {
    doesNotThrow(() => {
      GraphQLUpload.parseValue(new Upload());
    });
  });

  tests.add(
    "`GraphQLUpload` scalar `parseValue` with an invalid value.",
    () => {
      throws(
        () => {
          GraphQLUpload.parseValue(true);
        },
        {
          name: "GraphQLError",
          message: "Upload value invalid.",
        }
      );
    }
  );

  tests.add("`GraphQLUpload` scalar `parseLiteral`.", () => {
    throws(
      () => {
        // The dummy value is irrelevant.
        GraphQLUpload.parseLiteral(parseValue('""'));
      },
      {
        name: "GraphQLError",
        message: "Upload literal unsupported.",
        locations: [{ line: 1, column: 1 }],
      }
    );
  });

  tests.add("`GraphQLUpload` scalar `serialize`.", () => {
    throws(
      () => {
        // The dummy value is irrelevant.
        GraphQLUpload.serialize("");
      },
      {
        name: "GraphQLError",
        message: "Upload serialization unsupported.",
      }
    );
  });
};

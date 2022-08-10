// @ts-check

import TestDirector from "./testClass.mjs";

import test_GraphQLUpload from "./graphqlUploadKoa.test.mjs";
import test_graphqlUploadExpress from "./graphqlUploadExpress.test.mjs";
import test_graphqlUploadKoa from "./graphqlUploadKoa.test.mjs";
import test_ignoreStream from "./ignoreStream.test.mjs";
import test_processRequest from "./processRequest.test.mjs";
import test_Upload from "./Upload.test.mjs";

const tests = new TestDirector();

test_ignoreStream(tests);
test_GraphQLUpload(tests);
test_graphqlUploadExpress(tests);
test_graphqlUploadKoa(tests);
test_processRequest(tests);
test_Upload(tests);

tests.run();

// @ts-check

import TestDirector from "./testClass";

import test_GraphQLUpload from "./GraphQLUpload.test.js";
import test_graphqlUploadExpress from "./graphqlUploadExpress.test.js";
import test_graphqlUploadKoa from "./graphqlUploadKoa.test.js";
import test_ignoreStream from "./ignoreStream.test.js";
import test_processRequest from "./processRequest.test.js";
import test_Upload from "./Upload.test.js";

const tests = new TestDirector();

test_ignoreStream(tests);
test_GraphQLUpload(tests);
test_graphqlUploadExpress(tests);
test_graphqlUploadKoa(tests);
test_processRequest(tests);
test_Upload(tests);

tests.run();

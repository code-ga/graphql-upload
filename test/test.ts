// @ts-check

import TestDirector from "./testClass";

import test_GraphQLUpload from "./GraphQLUpload.test";
import test_graphqlUploadExpress from "./graphqlUploadExpress.test";
import test_graphqlUploadKoa from "./graphqlUploadKoa.test";
import test_ignoreStream from "./ignoreStream.test";
import test_processRequest from "./processRequest.test";
import test_Upload from "./Upload.test";

const tests = new TestDirector();

test_ignoreStream(tests);
test_GraphQLUpload(tests);
test_graphqlUploadExpress(tests);
test_graphqlUploadKoa(tests);
test_processRequest(tests);
test_Upload(tests);

tests.run();

const fs = require("fs");
const createSchemaCustomization = require("./utils/createSchemaCustomization");
const onCreateNode = require("./utils/onCreateNode");
const createResolvers = require("./utils/createResolvers");

exports.onPreBootstrap = ({ reporter }, options) => {
    const contentPath = options.contentPath || "data";

    if (!fs.existsSync(contentPath)) {
        reporter.info(`creating the ${contentPath} directory`);
        fs.mkdirSync(contentPath);
    }
};

exports.createSchemaCustomization = createSchemaCustomization;
exports.onCreateNode = onCreateNode;
exports.createResolvers = createResolvers;

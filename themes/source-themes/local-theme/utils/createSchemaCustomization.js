module.exports = async ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
    type Image @infer{
        src: File @fileByRelativePath
        alt: String
    }
    `);
};

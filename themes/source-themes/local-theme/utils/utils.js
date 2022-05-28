function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
}

const demoAuthor = {
    username: "demo name",
    slug: "demo-name",
    bio: "Either You didn't provide author details or your provided author doesn't exist in authors schema",
    socials: [],
};

module.exports = { slugify, demoAuthor };

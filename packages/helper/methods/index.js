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

function normalizedData(data, key = "section") {
    let allContetnt;

    data.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [k, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [k]: property,
            };
        }, {});

        allContetnt = {
            ...allContetnt,
            [newObj[key]]: {
                ...newObj,
            },
        };
    });

    return allContetnt;
}

function getSiblings(elem) {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

function getClosest(elem, selector) {
    // eslint-disable-next-line no-param-reassign
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;
}

function hasKey(obj, key) {
    return !!Object.prototype.hasOwnProperty.call(obj, key);
}

module.exports = {
    slugify,
    normalizedData,
    getSiblings,
    getClosest,
    hasKey,
};

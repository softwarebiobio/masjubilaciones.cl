const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/*.css", "/public/css/*.css")
        .addPassthroughCopy("./src/images/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/posts/**/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/posts/blog/**/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/_redirects")
    ;

    // Filtro para convertir fechas a formato ISO
    eleventyConfig.addFilter("dateToISO", (date) => {
        return DateTime.fromJSDate(date).toISO();
    });

    // Filtro para URLs absolutas
    eleventyConfig.addFilter("absoluteUrl", (url, base) => {
        return new URL(url, base).toString();
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }

};

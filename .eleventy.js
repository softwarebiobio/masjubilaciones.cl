const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/*.css", "/public/css/*.css")
        .addPassthroughCopy("./src/images/*.{jpg,png,gif,webp,avif}")
        .addPassthroughCopy("./src/posts/**/*.{jpg,png,gif,webp,avif}")
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

    // Filtro para fecha legible en español
    eleventyConfig.addFilter("readableDate", (date) => {
        return DateTime.fromJSDate(date).setLocale("es").toFormat("d 'de' MMMM, yyyy");
    });

    // Shortcode para año actual (copyright dinámico)
    eleventyConfig.addShortcode("year", () => new Date().getFullYear().toString());

    // Filtro para contar palabras
    eleventyConfig.addFilter("number_of_words", (content) => {
        if (!content) return 0;
        return content.split(/\s+/).filter(w => w.length > 0).length;
    });

    // Filtro para eliminar HTML
    eleventyConfig.addFilter("strip_html", (content) => {
        if (!content) return "";
        return content.replace(/<[^>]*>/g, "");
    });

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }

};

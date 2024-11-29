module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/*.css", "/public/css/*.css")
        .addPassthroughCopy("./src/images/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/posts/**/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/posts/blog/**/*.{jpg,png,gif}")
        .addPassthroughCopy("./src/_redirects")
    ;

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }

};

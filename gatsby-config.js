/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Personal Development Blog`,
    description: `A site for me to post tutorials and thoughts about tools I've used`,
    siteUrl: `https://www.samchapman.dev`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h4`],
            },
          },
          // {
          //           resolve: `gatsby-remark-prismjs`,
          //           options: {
          //             // Class prefix for <pre> tags containing syntax highlighting;
          //             // defaults to 'language-' (e.g. <pre class="language-js">).
          //             // If your site loads Prism into the browser at runtime,
          //             // (e.g. for use with libraries like react-live),
          //             // you may use this to prevent Prism from re-processing syntax.
          //             // This is an uncommon use-case though;
          //             // If you're unsure, it's best to use the default value.
          //             classPrefix: "language-",
          //             inlineCodeMarker: null,
          //             aliases: {},
          //             // This toggles the display of line numbers globally alongside the code.
          //             // To use it, add the following line in gatsby-browser.js
          //             // right after importing the prism color scheme:
          //             //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          //             // Defaults to false.
          //             // If you wish to only show line numbers on certain code blocks,
          //             // leave false and use the {numberLines: true} syntax below
          //             showLineNumbers: false,
          //             noInlineHighlight: false,
          //             // This adds a new language definition to Prism or extend an already
          //             // existing language definition. More details on this option can be
          //             // found under the header "Add new language definition or extend an
          //             // existing language" below.
          //             languageExtensions: [
          //               {
          //                 language: "superscript",
          //                 extend: "javascript",
          //                 definition: {
          //                   superscript_types: /(SuperType)/,
          //                 },
          //                 insertBefore: {
          //                   function: {
          //                     superscript_keywords: /(superif|superelse)/,
          //                   },
          //                 },
          //               },
          //             ],
          //             // Customize the prompt used in shell output
          //             // Values below are default
          //             prompt: {
          //               user: "root",
          //               host: "localhost",
          //               global: false,
          //             },
          //             escapeEntities: {},
          //           },
          //         },
        ],
      },
    },
  ],
}

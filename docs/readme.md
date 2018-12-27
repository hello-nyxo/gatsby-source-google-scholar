# [gatsby-source-google-scholar](https://www.gatsbyjs.org/packages/gatsby-source-google-scholar)

[Gatsby](https://www.gatsbyjs.org) source plugin that pulls metadata for scientific publications from [Google Scholar](https://scholar.google.com).

### [Demo site](https://gatsby-source-google-scholar.netlify.com)

## Install

```sh
yarn add gatsby-source-google-scholar
```

## Usage

Include the plugin in your `gatsby-config` and specify your query.

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    {
      resolve: `gatsby-source-google-scholar`,
      options: {
        query: `albert einstein`,
      },
    },
  ],
}
```

Grab relevant metadata with a GraphQL query.

```graphql
{
  allGoogleScholar {
    edges {
      node {
        id
        title
        url
        authors {
          name
          url
        }
        preEtAl
        postEtAl
        abstract
        year
        journal
        pdfUrl
        citedByCount
        citedByUrl
        relatedUrl
        allVersionsUrl
      }
    }
  }
}
```

`preEtAl` and `postEtAl` indicate whether Google used ellipsis to signal additional authors before or after the list of authors matching your query, as in this example:

![pre- and post et Al.](pre-post-et-al.png)

This is what you get.

```json
{
  "data": {
    "allGoogleScholar": {
      "edges": [
        {
          "node": {
            "id": "3e2dc5b6-bab2-5b3f-a9be-a9c17c9a8b28",
            "title": "Can quantum-mechanical description of physical reality be considered complete?",
            "url": "https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777",
            "authors": [
              {
                "name": "A Einstein",
                "url": "https://scholar.google.com/citations?user=qc6CJjYAAAAJ&amp;hl=en&amp;oe=ASCII&amp;oi=sra"
              },
              {
                "name": "B Podolsky",
                "url": null
              },
              {
                "name": "N Rosen",
                "url": null
              }
            ],
            "preEtAl": false,
            "postEtAl": false,
            "abstract": "In a complete theory there is an element corresponding to each element of reality. A sufficient condition for the reality of a physical quantity is the possibility of predicting it with certainty, without disturbing the system. In quantum mechanics in the case of two physical …",
            "year": 1935,
            "journal": "Physical review",
            "pdfUrl": "https://link.aps.org/pdf/10.1103/PhysRev.47.777",
            "citedByCount": 17404,
            "citedByUrl": "https://scholar.google.com/scholar?cites=8174092782678430881&as_sdt=2005&sciodt=0,5&hl=en&oe=ASCII",
            "relatedUrl": "https://scholar.google.com/scholar?q=related:odSh4BM2cHEJ:scholar.google.com/&scioq=albert+einstein&hl=en&oe=ASCII&as_sdt=0,5",
            "allVersionsUrl": "https://scholar.google.com/scholar?cluster=8174092782678430881&hl=en&oe=ASCII&as_sdt=0,5"
          }
        },
        {
          "node": {
            "id": "32a662f0-142e-5f9b-b7fb-cb0d8b70bac6",
            "title": " Investigations on the Theory of the Brownian Movement",
            "url": "https://books.google.com/books?hl=en&lr=&id=X5iRDQAAQBAJ&oi=fnd&pg=PA139&dq=albert+einstein&ots=-VS5f8ayBe&sig=2bA1xJZq6QKA6htCxiKGsXV8a3o",
            "authors": [
              {
                "name": "A Einstein",
                "url": "https://scholar.google.com/citations?user=qc6CJjYAAAAJ&amp;hl=en&amp;oe=ASCII&amp;oi=sra"
              }
            ],
            "preEtAl": false,
            "postEtAl": false,
            "abstract": "The\" Brownian movement\" was first described in 1828 by the botanist Robert Brown. While investigating the pollen of several different plants, he observed that pollen dispersed in water in a great number of small particles which he perceived to be in uninterrupted and …",
            "year": 1956,
            "journal": "",
            "pdfUrl": "https://www.hispacultur.org/book/516512150/download-investigations-on-the-theory-of-the-brownian-movement-albert-einstein.pdf",
            "citedByCount": 4345,
            "citedByUrl": "https://scholar.google.com/scholar?cites=13746912682491308133&as_sdt=2005&sciodt=0,5&hl=en&oe=ASCII",
            "relatedUrl": "https://scholar.google.com/scholar?q=related:Zeg0HkDYxr4J:scholar.google.com/&scioq=albert+einstein&hl=en&oe=ASCII&as_sdt=0,5",
            "allVersionsUrl": "https://scholar.google.com/scholar?cluster=13746912682491308133&hl=en&oe=ASCII&as_sdt=0,5"
          }
        }
      ]
    }
  }
}
```

## Known Issues

The HTTP response received from `request` seems to break HTML entity encoding. As a result German umlauts and some other special characters are currently not displayed correctly. Will hopefully be fixed soon. PRs welcome!
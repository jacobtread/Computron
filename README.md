# Computron

[![GitHub Pages](https://github.com/jacobtread/Computron/actions/workflows/deploy.yml/badge.svg)](https://github.com/jacobtread/Computron/actions/workflows/deploy.yml)
![VueJS](https://img.shields.io/badge/Powered%20By-NuxtJS-68A063?style=for-the-badge)
![LINES OF CODE](https://img.shields.io/tokei/lines/github/jacobtread/Computron?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/jacobtread/Computron?style=for-the-badge)

This is the source code for the Computron website. This website is running on NuxtJS (https://nuxtjs.org)

## Tutorial Pages

The tutorial pages are written in markdown they are stored in the `/content/tutorials` directory any markdown files
place into this directory will be added to the tutorials page each page must contain the following lines at the top of
the file ot correctly be displayed

```markdown
---
title: The title of the content

description: The short description of the content
---
```

## Downloads List

The list of available downloads are stored in `/content/downloads.json` this file is made of an array of categories
which contain titles and children. The following is the structure of the json

```json
{
  "categories": [
    {
      "id": "unique_id",
      "title": "Lorem Ipsum",
      "children": [
        {
          "name": "Example Download",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.",
          "link": "https://example.com"
        },
        {
          "name": "Example Download",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.",
          "link": "https://example.com"
        }
      ]
    }
  ]
}
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

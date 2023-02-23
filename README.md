# [ai2html](http://ai2html.org)

> ai2html is an open-source script for Adobe Illustrator that converts your Illustrator documents into html and css.

The Axios version of ai2html has been customized for the Axios Visuals workflow, including the exporting of fallback images and the ability to export a project as a svelte component (`ai2svelte`). See [Notion](https://www.notion.so/axios-editorial/ai2html-Tips-Tricks-78dcfbf163554dff9d88f4cc0fb2e8d8?pvs=4) for some additional tips and tricks to using AI.

For documentation and examples on [how to use ai2html](http://ai2html.org) in general, please visit [ai2html.org](http://ai2html.org).

## Installation

Copy [`ai2html.js`](/ai2html.js) to the `Applications/[Adobe Illustrator]/Presets/en_US/Scripts` directory (select the version of the software you use).

## How to use

### Standard ai2html project

1. Copy the [`yyyy-mm-dd-slug`](https://drive.google.com/drive/folders/1jmfOOwgOvkL371FKiGZVEr-4hr19rSSS) directory template from the team Drive folder to your project.
2. Rename the folder and the `yyyy-mm-dd-slug.ai` file. The name of the `.ai` file will be the name of your built/processed project.
3. Create your graphics using the artboards provided
4. In the `ai2html-settings` block, set your `alt` text.
5. When you're ready, run `ai2html` (File --> Scripts --> ai2html)
6. When the script runs, you should need a new directory called `/[slug]` in your project folder that contains:

- `[slug].html` - your embed HTML
- `/images/` - Images directory that contains all the background images needed to render the graphic
- `/fallbacks/` - Directory that contains the fallback images of the mobile large, tablet, social and instagram artboards.

7. Upload the output `/[slug]` directory to the graphics server

### ai2svelte project

If you want to create a graphic that will be used inside of a Svelte project, make these modifications to the steps above:

1. When updating the project slug, use title-case/pascal-case naming (eg. `WorldMap/WorldMap.ai`)
2. We recommend **not** including the hed or dek of the chart in the artboards. Instead, you can set it in Svelte.
3. In the `ai2html-settings` block, set `project_type: svelte`. You can also optionally set `generate_fallbacks: no` to stop the generation of fallback images.
4. When you run the `ai2html` script, the output will have `[slug].svelte` instead of `[slug].html`
5. Copy the `/[slug]` output directory to your components directory in your Svelte project and rename accordingly. Depending on your project structure, that might look like `/src/lib/components/`.
6. Import the AI component and use in your project

```svelte
<script>
  import WorldMap from "components/WorldMap/WorldMap.svelte"
</script>

<WorldMap />
```

If your Svelte project is not already set up to use [`svelte-preprocess-import-assets`](https://github.com/bluwy/svelte-preprocess-import-assets), install it and add it to your project's `svelte.config.js` file.

```js
import importAssets from "svelte-preprocess-import-assets";

const config = {
  kit: {
    // Kit options here
  },
  preprocess: [
    preprocess({
      // Svelte preprocess options here
    }),
    importAssets(),
  ],
};
```

## Artboard notes

- You may create additional artboards if you need other sizes
- You may increase the _height_ of all the artboards, except for the social and instagram artboards
- Artboards that are named `-[name]` will not be included in the output

## Modifying settings

If you need to modify any of the default settings, you can do so by creating an `ai2html-config.json` file in your project folder or by modifying the `ai2html-settings` block in the `.ai` file. See [ai2html.org](http://ai2html.org/#settings) for details.

### Custom fonts

To add custom fonts to a project, we recommend using an `ai2html-config.json` file. To use a custom font, add the font information to the `fonts` array, like this:

`ai2html-config.json`

```txt
{
  "fonts": [
    {
      "aifont": "CCMeanwhile",
      "family": "ccmeanwhile, sans-serif",
      "weight": "",
      "style": ""
    }
  ]
}

```

Save `ai2html-config.json` to the same directory as your `.ai` file.

In order to add fonts to the array, you'll need to know the Illustrator name for the font files. If you haven't already, save [`/utilities/aifontname.js`](https://github.com/axiosvisuals/ai2html/blob/main/utilities/aifontname.js) to `Applications/[Adobe Illustrator]/Presets/en_US/Scripts`.

With your `.ai` file open in Illustrator, go to `File --> Scripts --> aifontname`. This will generate a popup in AI of the fonts used. These are the names you want to use in the `fonts` array.

#### Fonts from Adobe Fonts/Google Fonts

If you're loading in fonts from Adobe Fonts/Typekit/Google Fonts, you must also:

1. Add fonts to Creative Cloud (Adobe Fonts only)
   1. Sign in to https://fonts.adobe.com
   2. Find the custom fonts needed for the project and mark them as "active". This should sync them to your local computer using Creative Cloud.
   3. Add to or create a new Web Project
      - **Note:** Only include the fonts/font weights you'll actually be using in the Web Project. Every new font/weight/style increases the overall page load time. This is different from the fonts you have active on your local computer.
2. In your Svelte project, add the embed code provided by Adobe Fonts

```
<link rel="stylesheet" href="https://use.typekit.net/vlt1eba.css">
```

## Contributing to this project

The Github repository for this site is available at [newsdev/ai2html](https://github.com/newsdev/ai2html).

## Thanks

Many thanks to [Gregor Aisch](https://twitter.com/driven_by_data), [Derek Watkins](https://twitter.com/dwtkns), [Josh Katz](https://twitter.com/jshkatz), [K.K. Rebecca Lai](https://twitter.com/kkrebeccalai), [Tom Giratikanon](https://twitter.com/giratikanon), [Matt Ericson](https://twitter.com/mericson), [Jeremy Ashkenas](https://twitter.com/jashkenas) and [Alan McLean](https://twitter.com/alanmclean) for their incredible contributions to this project, as well as to my colleagues in The New York Times [Graphics Department](https://twitter.com/nytgraphics) for their patient guidance.

If you’re learning to write Javascript for Adobe Illustrator, [John Wundes](http://www.wundes.com/JS4AI/), has many wonderful scripts. [explore.js](http://www.wundes.com/JS4AI/explore.js) is particularly helpful for understanding what attributes are attached to Illustrator objects.

---

<p style="font-size:.8em;opacity:0.5;">Created by <a href="https://twitter.com/archietse">Archie Tse</a> / <a href="https://github.com/newsdev">The New York Times</a></p>

<p style="font-size:.8em;opacity:0.7;">Copyright (c) 2011-2015 The New York Times Company</p>

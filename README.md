# [ai2html](http://ai2html.org)

> ai2html is an open-source script for Adobe Illustrator that converts your Illustrator documents into html and css.


#### Installation

1. Clone this repo to your machine.
2. Move the `ai2html.js` file into the Illustrator folder where your scripts are located. Default path: `/Applications/Adobe Illustrator CC 20XX/Presets/en_US/Scripts`
3. Run the script in Illustrator: `File > Script > ai2html`

#### Walkthrough

1. Create your graphic/visualization in the `ai2html-template.ai` file.
2. Make sure you fill out the `image_alt_text` field in the <b>ai2html-settings</b> block to the left of your artboards before running the script.

![Screenshot 2024-03-01 at 12 44 49 PM](https://github.com/cbs-news-data/ai2html/assets/25045397/ab06408c-44ff-4949-8abd-5cb08eca97a9)

4. Run the script in Illustrator: `File > Scripts > ai2html`
5. This should export to a folder called "ai2html-output" with all of your artboards and one HTML file.
   - Place the contents of this folder into a GitHub repo
   - Rename the HTML file to "index.html" for GitHub Pages recognition.
   - Add Proxima Nova font by pasting this line at the top of the HTML file:
     ```html
     <link rel="stylesheet" href="https://use.typekit.net/rdn8fde.css">
     ```
   - Add Publico Headline font by copying the font folder into your project repo and adding this code to the HTML file
     ```
     @font-face {
      font-family: 'Publico Headline';
     src: url('fonts/PublicoHeadline-Black.woff2') format('woff2'),
           url('fonts/PublicoHeadline-Black.woff') format('woff');
     }
     ```
6. Push your repo to GitHub
7. Visit the repo on GitHub, navigate to Settings > Pages, and select the <b>main</b> branch before saving.
8. Wait for your repo to deploy and it will be live at this URL: `https://cbs-news-data.github.io/<REPO NAME HERE>`.

#### Embedding in Prism
To make sure your embeds are responsive, include this script in your file:
```
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>

			document.addEventListener("DOMContentLoaded", function() {
            var pymChild = new pym.Child();
        });
```
Copy this div into Prism, changing the URL to your GitHub pages URL:
```
<div id="example"></div> <script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script> <script> var pymParent = new pym.Parent('example', 'https://cbs-news-data.github.io/fireworks-laws_ai2html/', {}); </script>
```

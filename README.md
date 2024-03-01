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
   - Add fonts by pasting this line at the top of the HTML file:
     ```html
     <link rel="stylesheet" href="https://use.typekit.net/rdn8fde.css">
     ```
6. Push your repo to GitHub and wait for the page to deploy.
It will be live at this URL: `https://cbs-news-data.github.io/<REPO NAME HERE>`.

#### Embedding in Prism

Use this iframe below, changing the URL to the correct GitHub page name with your project:

```markdown
<iframe src="https://cbs-news-data.github.io/<REPO NAME HERE>" width=100% height=500px></iframe>

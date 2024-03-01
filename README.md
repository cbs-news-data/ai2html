# [ai2html](http://ai2html.org)

> ai2html is an open-source script for Adobe Illustrator that converts your Illustrator documents into html and css.


#### Installation

1. Clone this repo to your machine.
2. Move the `ai2html.js` file into the Illustrator folder where your scripts are located. Default path: `/Applications/Adobe Illustrator CC 20XX/Presets/en_US/Scripts`
3. Run the script in Illustrator: `File > Script > ai2html`

#### Walkthrough

1. Create your graphic/visualization in the `ai2html-template.ai` file. 
2. Run the script in Illustrator: `File > Scripts > ai2html`
3. This should export to a folder called "ai2html-output" with all of your artboards and one HTML file.
   - Rename this folder with a custom slug for your project.
   - Rename the HTML file to "index.html" for GitHub Pages recognition.
   - Add fonts by pasting this line at the top of the HTML file:
     ```html
     <link rel="stylesheet" href="https://use.typekit.net/rdn8fde.css">
     ```
4. Push your repo to GitHub and wait for the page to deploy.
It will be live at this URL: `https://cbs-news-data.github.io/<REPO NAME HERE>`.

#### Embedding in Prism

Use this iframe below, changing the URL to the correct GitHub page name with your project:

```markdown
<iframe src="https://cbs-news-data.github.io/<REPO NAME HERE>" width=100% height=500px></iframe>

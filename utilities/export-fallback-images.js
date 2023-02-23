var doc = app.activeDocument;

var pathComponents = doc.fullName.toString().split("/");
pathComponents.pop();
var slug = pathComponents[pathComponents.length - 1];
var checkForOutputFolder = function (folderPath) {
  var outputFolder = new Folder(folderPath);
  if (!outputFolder.exists) outputFolder.create();
};
var exportPath = pathComponents.join("/") + "/" + slug + "/fallbacks/";
checkForOutputFolder(exportPath);
var fallbackURL = new File(exportPath + "/" + slug + "-fallback");
var appleURL = new File(exportPath + "/" + slug + "-apple");
var socialURL = new File(exportPath + "/" + slug + "-social");
var instaURL = new File(exportPath + "/" + slug + "-insta");

var exportOptions = new ExportOptionsPNG24();
exportOptions.horizontalScale = 300;
exportOptions.verticalScale = 300;
exportOptions.artBoardClipping = true;
exportOptions.transparency = false;
var type = ExportType.PNG24;

$.writeln(fallbackPath, applePath);

var artboards = doc.artboards;

var process = function (ab, file, options) {
  options = options || {};
  var original = ab.artboardRect;

  var newRect = [original[0], original[1], original[2], original[3]];

  if (options.addPadding === true) {
    ab.artboardRect = newRect;
  }

  doc.exportFile(file, type, exportOptions);
  ab.artboardRect = original;
};

for (var i = 0; i < artboards.length; i++) {
  var abname = artboards[i].name;

  if (abname === "tablet:599") {
    artboards.setActiveArtboardIndex(i);
    process(artboards[i], fallbackPath, { addPadding: true });
  }
  if (abname === "mobile-large:329") {
    artboards.setActiveArtboardIndex(i);
    process(artboards[i], applePath, { addPadding: true });
  }
  if (abname === "-social") {
    artboards.setActiveArtboardIndex(i);
    process(artboards[i], socialPath);
  }
  if (abname === "-insta") {
    artboards.setActiveArtboardIndex(i);
    process(artboards[i], instaPath, { square: true });
  }
}

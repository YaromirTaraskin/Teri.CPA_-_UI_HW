document.write("<p>" + "The HREF of the document is "+ document.location.href+ "</p>");
document.write("<p>" + "The excerpted protocol is " + document.location.protocol+ "</p>");

var pathname = document.location.pathname
document.write("<p>" + "The full excerpted filename is " + pathname + "</p>");

var indexFilenameStarts = pathname.lastIndexOf("/") + 1;
var filename = pathname.substr(indexFilenameStarts);
document.write("<p>" + "The short excerpted filename is " + filename + "</p>");

var indexExtensionStarts = filename.lastIndexOf(".") + 1;
var extension_name = filename.substr(indexExtensionStarts);
document.write("<p>" + "The excerpted extension of the file is " + extension_name + "</p>");

var paramsString = document.location.search;


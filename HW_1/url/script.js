//Excerpting and showing URLA
document.write("<p>" + "The Uniform Resource Locators address of the document is "+ document.location.href+ "</p>");
document.write("<p>" + "The excerpted protocol is " + document.location.protocol+ "</p>");

//Excerpting and showing pathname
const pathname = document.location.pathname;
document.write("<p>" + "The full excerpted filename is " + pathname + "</p>");

//Excerpting and showing short filename
const indexFilenameStarts = pathname.lastIndexOf("/") + 1;
const filename = pathname.substr(indexFilenameStarts);
document.write("<p>" + "The short excerpted filename is " + filename + "</p>");

//Excerpting and showing extension
const indexExtensionStarts = filename.lastIndexOf(".") + 1;
const extension_name = filename.substr(indexExtensionStarts);
document.write("<p>" + "The excerpted extension of the file is " + extension_name + "</p>");

//Excerpting substring of params and creating the required object of them
const paramsString = document.location.search;
const searchParams = new URLSearchParams(paramsString);
const paramsObject = new Object();
for(const pair of searchParams.entries()) {
    paramsObject[pair[0]] = pair[1];
}
document.write("<p>Params object has been created.</p>");

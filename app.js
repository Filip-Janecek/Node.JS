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


fs.unlink('mujzcelanovysoubor2.txt', function (err) {
    if (err){
        return console.error(err);
    }
    console.log("Vymazáno!");
});


let srv = http.createServer(main);
srv.listen(PORT);

console.log("Server běží na adrese http://localhost:" + PORT);
var fs = require('fs');
var http = require('http');
var path = require('path');
var folserPath = 'src/hello.txt';



const serveFolder = ()=>{
    // creer un nouveau serveur

    http.get("http://127.0.0.1:2450/hello.txt", res =>{
        
        try {
            let chemin  = path.join(folserPath)
            if(fs.existsSync(chemin)){
                fs.readFile(chemin, 'utf8', (err, fd)=>{ 

                    if (err){
                        //res.statusCode(err.code).end(err.message)
                        console.log( err.message)
                    }

                    //res.statusCode(500).end(fd)
                    console.log('Contenu fichier', fd);
                })
            }else{
                console.log('FIchier inexistant');
            }      
        } catch (error) {
            console.error(error);
        }       
    })
    

    const serveur = http.createServer((req, res)=>{
        res.end('serveur connecter');
    });
    serveur.listen(2450, ()=>console.log('serveur listen port: 2450'))
}

serveFolder()
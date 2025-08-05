let javascript = `
     ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
     ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
     ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║   
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║   
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
                                                                            
`
// console.log(javascript);
const fs = require('fs');

function FetchFile() {
    try {
        const jsonString = fs.readFileSync('../DB/data.json', 'utf8');
        const data = JSON.parse(jsonString);
        return data;
    } catch (err) {
        console.log("❎ Error:", err);
        return null;
    }
}

const run = FetchFile();
// console.log(run);


// map the json data

let SexData =  run.map(all => all.sex);
// console.log(SeeSomeData);

let userData = run.map((all)=>{
     return {
          "id":all.id,
          "Name":all.name,
          "Sex": (function () {
               if(all.sex === "Female"){
                    return "let's go to denver"
               } else {
                    return "go way for me " 
               }
          }())
     }
     
})
// console.log(userData);

// sort the json data
let sortData = run.sort();
console.log(sortData);





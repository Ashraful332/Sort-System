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

let SexData =  run.map(all => all.sex);
// console.log(SeeSomeData);

let userData = run.map((all)=>{
     all.id,
     all.name,
     all.sex
})
console.log(userData);


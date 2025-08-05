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


// fetch the data from json file

let JsonData;

fs.readFile('../DB/data.json', 'utf8', (err, jsonString) => {
     if (err) {
          console.log("❎ Error Reading File ",err);
          return null;
     }
     try{
          const data = JSON.parse(jsonString);
          console.log("Fetch data :" , data);
          JsonData = data
          
     }catch(error){
          console.error("❎ Error is coming :", error);
          
     }
});





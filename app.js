import fs from "fs"
let num = 1
let mesaj2 = ""
function vurma(){
   for(let i = 1;i<=9;i++){
    for(let j = 1;j<=9;j++){
        
        
        
        let mesaj = `${num} * ${j} = ${num * j}`
        mesaj2 = String(mesaj)
        console.log(mesaj);
        
    }
    num++
    
    
    
   }
}
vurma(num)
fs.writeFile("./db.txt", mesaj2, () =>{
    mesaj2++
    console.log("salam");
    
})
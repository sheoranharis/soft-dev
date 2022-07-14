import {franc, francAll} from 'franc'
import lng from "langs"
import color from "colors"
 
let myLang = franc(process.argv[2]);

if(myLang === 'und'){
    console.log("Cant figure it out, try it with more text.".red)
}
else{
let res = lng.where("3", myLang)
console.log(res.name.green)
}

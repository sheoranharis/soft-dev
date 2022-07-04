let mainAsk = prompt("Welcome to TO DO. Press anything to enter.")

let storage = [];
let task;
let num = 0;

while(mainAsk !== 'quit'){
    mainAsk = prompt("Select options- new | list | delete | quit")
    
    if(mainAsk === 'new'){
        mainAsk = prompt("What would you like to add to your tasks??")
      
        console.log(`${mainAsk}is added to tasks.`)
        storage.push(mainAsk);
        
    }
    else if(mainAsk === 'list'){
        console.log("********* Tasks **********")
        for(let i=0; i<storage.length; i++){
            console.log(`   ${i}: ${storage[i]}`)
        }
        console.log("****You are gonna do it****")
        //mainAsk = prompt("What would you like to do now")
        
    }
    else if(mainAsk === 'delete'){
        mainAsk = parseInt(prompt('Which one do you like to delete? - Choose by number.'))
        let deleted = storage.splice(`${mainAsk}`, 1)
        console.log(`You deleted ${deleted}`)
        
    }

}
console.log("Ok, You quit the app.")

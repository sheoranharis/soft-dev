let mainAsk = prompt("Welcome to TO DO. Press anything to enter.")

let storage = [];
let task;
let num = 0;

while(mainAsk !== 'quit'){
    mainAsk = prompt("Select options- new | list | delete | quit")
    
    while(mainAsk === 'new'){
        mainAsk = prompt("What would you like to add to your tasks??")
      
        //for(let i =0; i < storage.length+1; i++){
            task = `${num}: ${mainAsk}`
        
        num++;
        console.log(`${mainAsk}is added to tasks.`)
        storage.push(task);
        
    }
    if(mainAsk === 'list'){
        console.log("********* Tasks **********")
        for(let li of storage){
            console.log(`      ${li}`)
        }
        console.log("****You are gonna do it****")
        //mainAsk = prompt("What would you like to do now")
        continue;
    }
    else if(mainAsk === 'delete'){
        mainAsk = prompt('Which one do you like to delete? - Choose by number.')
        if(mainAsk == '') {
            break;
        }
        else{
            storage.splice(`${mainAsk}`, 1)
        }
        continue;
    }
    



}

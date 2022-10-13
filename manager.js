// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const prompt = require(`prompt-sync`)();



let menu = ` 
Hello! Welcome to the task Manager.
Enter a number from 1 to 5:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done 
5. to Exit the task manager
`




// task //

let tasks = ["playing video game", "listening to music", "pet the dogs", "trying to understand JS"]

// add task//

const addTask = () => {
    newTask = prompt("what's the new task?");
    tasks.push(newTask); 
    console.log(tasks)
}

// remove task //
const rmvTask = () => {
    whichTask = prompt("Which task would you like to remove?")
    let i = whichTask;
    splicedTask = tasks.splice(i, 1);
}

// const showtasks = () => {
//     console.log(menu)
// }

// showtasks() *I M WORKING ON THIS PART FOR THE MOMENT SEE YOU TOMORROW JS *

rl.question('Enter a number from 1 to 5 ', (menu) => {
    if(menu ==1 ){
        console.log(tasks)
        return showtasks();
    }
    if(menu ==2 ){
        console.log(tasks)
        addTask();
    }
    if(menu ==3 ){
        console.log(tasks)
        rmvTask();
    }
    if(menu ==4 ){
        console.log(taches + " done")
        rl.close();
    }
    if(menu ==5 ){
        console.log("Ciao Baby")
        rl.close();
    }
    if(menu > 5 || menu <1){
        console.log("Ha Ha Ha, vous n'avez pas dit le nombre magique")
        rl.close();
    }
});



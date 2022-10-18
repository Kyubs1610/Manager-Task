// SETUP CODE //
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const prompt = require(`prompt-sync`)();

// END OF THE SETUP //

let tasks = [ "playing video game", "listening to music", "pet the dogs", "trying to understand JS"]

const menu = () => {
    console.log (`Hello! Welcome to the task Manager:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done 
5. to Exit the task manager`)

};

const showtasks = () => {
    console.log(tasks)
}

// add task//

const addTask = () => {
    newTask = prompt("What's the new task?");
    tasks.push(newTask); 
    console.log(tasks)
}

// remove task //
const rmvTask = () => {
    whichTask = prompt("Which task would you like to remove?")
    let i = whichTask;
    splicedTask = tasks.splice(i, 1);
}
//task done //

const doneTask = () => {
    taskDone = prompt(`Which task is done ?`)
    let i = taskDone;
    tasks[i] = tasks[i] + " [V]"
    console.log(tasks)
}
const manager = () => {
    menu();

rl.question('Enter a number between 1 to 5 ', (menu) => {
    if(menu == 1 ){
        showtasks();
        return manager();
         } 
    if(menu ==2 ){
        console.log(tasks)
        addTask();
        console.log(tasks);
        return manager();
        }
    if(menu ==3 ){
        console.log(tasks)
        rmvTask();
        console.log(tasks);
        return manager();
        }
    if(menu ==4 ){
        console.log(tasks)
        doneTask();
        return manager();
    }
    if(menu ==5 ){
        console.log("Ciao Baby")
        rl.close();
    }
    if(menu > 5 || menu <1){
        console.log("You didn't say the magic number!")
        rl.close();
    }
});
}
manager ();
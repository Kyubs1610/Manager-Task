// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Welcome to your task manager, Press: ")
let tasks = ["1. to see all your tasks", "2. to add a task", "3. to delete a task", "4. to mark a task as done", "5. to Exit the task"]

let taches = ["playing video game", "listenning to music", "pet the dogs", "trying to understand JS"]

const showtasks = () => {
    console.log(tasks)
}

showtasks()


rl.question('Enter a number from 1 to 5 ', (task) => {
    if(task ==1 ){
        console.log(taches)
        rl.close();
    }
    if(task ==2 ){
        console.log(taches + "")
        rl.close();
    }
    if(task ==3 ){
        console.log("nikl")
        rl.close();
    }
    if(task ==4 ){
        console.log(taches + " done")
        rl.close();
    }
    if(task ==5 ){
        rl.close();
    }
    if(task > 5 || task <1){
        console.log("Ha Ha Ha, vous n'avez pas dit le nombre magique")
        rl.close();
    }
});



let tasks = [];

while(true){
    let task = prompt("Enter a task or type 'done' to finish adding.");

    if(task.toLowerCase() === 'done')
    {
        break;
    }

    tasks.push(task);
}
console.log("TO DO LIST");
for(let i = 0; i < tasks.length; i++){
    console.log(`${i + 1}.`, tasks[i]);
}
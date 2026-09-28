type: "module"
import { access } from "node:fs";

const tasks = [
  { id: 1, title: "Setup Mongo", done: true, price: 100, priority: "high" },
  { id: 2, title: "Create Express API", done: false, price: 200, priority: "medium" },
  { id: 3, title: "Build Next UI", done: true, price: 150, priority: "high" },
  { id: 4, title: "Deploy App", done: false, price: 50, priority: "low" }
];

const user = { id: 101, name: "Suman", email: "suman@test.com", role: "developer" };

const frontendStack = ["React", "Next.js"];
const backendStack = ["Node.js", "Express"];

const completedTasks = tasks.filter(task => task.done === true)
console.log("Completed tasks - ",completedTasks)

const taskTitles = tasks.map(task => task.title)
console.log("List of Task Titles: \n",taskTitles) 

const highPriortyTask = tasks.find(task => task.priority === "high")
console.log("High Priority Task - ",highPriortyTask) 


// Reduce Excersise

const TotalPrice = tasks.reduce((accumulator,current)=>{
return accumulator + (current.price || 0)
},0 )
console.log("Total- ",TotalPrice)
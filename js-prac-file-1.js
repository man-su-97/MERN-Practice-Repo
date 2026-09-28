const tasks = [
  { id: 1, title: "Setup Mongo", done: true, price: 100, priority: "high" },
  { id: 2, title: "Create Express API", done: false, price: 200, priority: "medium" },
  { id: 3, title: "Build Next UI", done: true, price: 150, priority: "high" },
  { id: 4, title: "Deploy App", done: false, price: 50, priority: "low" }
];

const user = { id: 101, name: "Suman", email: "suman@test.com", role: "developer" };

const frontendStack = ["React", "Next.js"];
const backendStack = ["Node.js", "Express"];

// 1. Basic Array Methods
const completedTasks = tasks.filter(task => task.done);
const taskTitles = tasks.map(task => task.title);
const highPriortyTask = tasks.find(task => task.priority === "high");

// 2. Reduce Exercises
const totalPrice = tasks.reduce((acc, current) => acc + (current.price || 0), 0);

const completedTitles = tasks.reduce((acc, task) => {
  if (task.done) acc.push(task.title);
  return acc;
}, []);

const countByPriority = tasks.reduce((acc, curnt) => {
  acc[curnt.priority] = (acc[curnt.priority] || 0) + 1;
  return acc;
}, {});

// 3. Destructuring & Renaming
const { name, email: mail } = user;

// 4. Spread Operations
const updateuser = { ...user, role: "lead" };
const fullStack = [...frontendStack, ...backendStack];
// selecting elements

let task = document.querySelector(".taskInput");  
let button = document.querySelector("button");
let works_Box = document.querySelector(".works"); 
let check_Box = document.querySelector(".check");

let Count = 0;

button.addEventListener("click", () => {
  let task_Text = task.value.trim();
  if (task_Text !== "") {
    Count++;

    let task_Item = document.createElement("div");
    task_Item.textContent = `${Count}. ${task_Text}`;
    task_Item.className = "task";
    works_Box.appendChild(task_Item);

  let check_Item = document.createElement("div");
    check_Item.className = "check-task";
    check_Item.style.margin = "5px 0";

    let check_box = document.createElement("input");
    check_box.type = "checkbox";
    check_box.id = `task-${Count}`;

    let la_bel = document.createElement("label");
    la_bel.setAttribute("for", `task-${Count}`);
    la_bel.textContent = ` ${task_Text}`;
    la_bel.style.marginLeft = "8px";

    check_Item.appendChild(check_box);
    check_Item.appendChild(la_bel);
    check_Box.appendChild(check_Item);

    input.value = "";
  }
});



// selecting elements

// let input = document.querySelector(".taskInput");
// let button = document.querySelector("button");
// let worksDiv = document.querySelector(".works");
// let checkDiv = document.querySelector(".check");

// counting before task
// let taskCount = 0;

// button.addEventListener("click", () => {
//   let taskText = input.value.trim();
// condition for count
//   if (taskText !== "") {
//     taskCount++;

//    Add numbered task to .works
//     let taskItem = document.createElement("div");
//     taskItem.textContent = `${taskCount}. ${taskText}`;
//     taskItem.className = "task";
//     worksDiv.appendChild(taskItem);

//   let checkItem = document.createElement("div");
//     checkItem.className = "check-task";
//     checkItem.style.margin = "5px 0";

//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = `task-${taskCount}`;

//     let label = document.createElement("label");
//     label.setAttribute("for", `task-${taskCount}`);
//     label.textContent = ` ${taskText}`;
//     label.style.marginLeft = "8px";

//     checkItem.appendChild(checkbox);
//     checkItem.appendChild(label);
//     checkDiv.appendChild(checkItem);

//     input.value = "";
//   }
// });


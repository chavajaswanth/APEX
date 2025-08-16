
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;


  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";

  if(name === "") {
    document.getElementById('nameError').textContent = "Name is required";
    valid = false;
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email === "") {
    document.getElementById('emailError').textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Invalid email";
    valid = false;
  }

  if(message === "") {
    document.getElementById('messageError').textContent = "Message is required";
    valid = false;
  }

  if(valid) {
    alert("Form submitted successfully!");
    
    this.reset();
  }
});


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if(taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  }

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = "";
}

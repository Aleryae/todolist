console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Welcome to the to do list");

	class Task {
		constructor(content) {
			this.content = content;
		}

		createInput(parent) {
			const inputGroup = document.createElement('div');
			inputGroup.setAttribute('class', 'input-group mb-3');

			const taskOutput = document.createElement('div');
			taskOutput.setAttribute('class', 'input-group-text');

			const inputCheck = document.createElement('input');
			inputCheck.setAttribute('class', 'form-check-input mt-0');
			inputCheck.setAttribute('type', 'checkbox');
			inputCheck.setAttribute('aria-label', 'Checkbox for following text input');
			inputCheck.setAttribute('value', '');

			const inputContent = document.createElement('input');
			inputContent.setAttribute('class', 'form-control bg-dark');
			inputContent.setAttribute('type', 'text');
			inputContent.setAttribute('aria-label', 'Text input with checkbox');
			inputContent.setAttribute('value', this.content);
			inputContent.setAttribute('disabled', '');
			inputContent.setAttribute('readonly', '');

			parent.appendChild(inputGroup);
			inputGroup.appendChild(taskOutput);
			taskOutput.appendChild(inputCheck);
			inputGroup.appendChild(inputContent);

		}
	}
	let group = document.querySelector('#group');
	let taskInput = document.querySelector('#taskInput');

	taskInput.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			const task = new Task(taskInput.value);
			task.createInput(group);
		}
	});

});
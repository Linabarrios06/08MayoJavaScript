// Definición de la clase Empleado
class Empleado {
    constructor(nombres, cargo) {
        this.nombres = nombres;
        this.cargo = cargo;
    }
}

// Obtener los elementos del DOM
const employeeForm = document.getElementById("employee-form");
const employeeList = document.getElementById("employee-list");

// Manejar el evento de envío del formulario para agregar empleados
employeeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const employeeName = document.getElementById("employee-name").value;
    const employeePosition = document.getElementById("employee-position").value;

    if (employeeName && employeePosition) {
        const newEmployee = new Empleado(employeeName, employeePosition);
        addEmployeeToList(newEmployee);
        employeeForm.reset();
    } else {
        alert("Por favor, complete todos los campos.");
    }
});

// Función para agregar un empleado a la lista
function addEmployeeToList(employee) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${employee.nombres}</strong> - ${employee.cargo}
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Eliminar</button>`;

    // Agregar evento de edición al botón de editar
    const editButton = li.querySelector(".edit-btn");
    editButton.addEventListener("click", function() {
        const newName = prompt("Ingrese el nuevo nombre del empleado:");
        const newPosition = prompt("Ingrese el nuevo cargo del empleado:");

        if (newName !== null && newPosition !== null) {
            employee.nombres = newName;
            employee.cargo = newPosition;
            li.innerHTML = `<strong>${employee.nombres}</strong> - ${employee.cargo}
                            <button class="edit-btn">Editar</button>
                            <button class="delete-btn">Eliminar</button>`;
            setupEditDeleteButtons(li, employee);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Agregar evento de eliminación al botón de eliminar
    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    employeeList.appendChild(li);
}

// Función para configurar los botones de editar y eliminar
function setupEditDeleteButtons(li, employee) {
    const editButton = li.querySelector(".edit-btn");
    const deleteButton = li.querySelector(".delete-btn");

    editButton.addEventListener("click", function() {
        const newName = prompt("Ingrese el nuevo nombre del empleado:", employee.nombres);
        const newPosition = prompt("Ingrese el nuevo cargo del empleado:", employee.cargo);

        if (newName !== null && newPosition !== null) {
            employee.nombres = newName;
            employee.cargo = newPosition;
            li.innerHTML = `<strong>${employee.nombres}</strong> - ${employee.cargo}
                            <button class="edit-btn">Editar</button>
                            <button class="delete-btn">Eliminar</button>`;
            setupEditDeleteButtons(li, employee);
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    deleteButton.addEventListener("click", function() {
        li.remove();
    });
}

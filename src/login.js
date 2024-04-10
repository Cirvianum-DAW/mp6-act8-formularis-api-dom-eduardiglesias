document.getElementById('registerForm').addEventListener('submit', function (event){
    event.preventDefault();

    //Obtenim tots els valos entrats al formulari
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dni = document.getElementById('dni').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const conditions = document.getElementById('conditions').checked;

    //Validacions:

    //1. Tots els camps del formulari són obligatoris. Heu de mostrar un missatge d'alerta si algun camp no està omplert.
    if (!name || !surname || !email || !password || !dni || !birthdate || !gender) {
        alert('Hi ha camps del formulari buits.');
    }
    if (!conditions) {
        alert("Has d'acceptar els termes i condicions.");
    }

    //2. La contrasenya ha de tenir com a mínim 6 caràcters. Heu de mostrar un missatge d'alerta si la contrasenya és massa curta.
    if (password.length < 6) {
        alert("La contrasenya ha de tenir més de 6 caràcters.");
        return;
    }

    //3. L'adreça de correu electrònic ha de tenir un format vàlid. Utilitzeu l'expressió regular proporcionada a continuació per validar l'adreça de correu electrònic:
    const emailRegex = /^[^\s@]+@cirvianum.cat$/;
    if (!emailRegex.test(email)) {
        alert("L'adreça de correu electrònic no és vàlida")
    }

    //4. L'usuari ha de ser major d'edat per registrar-se. Aquesta validació depèn de la data de naixement proporcionada. Heu de calcular l'edat de l'usuari i mostrar un missatge d'alerta si és menor de 18 anys.
    const today = new Date();

    const birthdateDate = new Date(birthdate);
    age = (today.getTime() - birthdateDate.getTime() / (365.25 * 24 * 3600 * 1000))

    if (age < 18) {
        alert("Has de ser major d'edat per registrar-te")
    }

    //5. El camp del DNI/NIF ha de tenir un format vàlid. Utilitzeu l'expressió regular proporcionada a continuació per validar aquest camp:
    const dniRegex = /^[a-zA-Z0-9]?[0-9]{7}[a-zA-Z0-9]?$/;
    if (!dniRegex.test(dni)){
        alert("El DNI no és vàlid")
    }
    //6. L'usuari ha de marcar l'opció per acceptar els Termes i Condicions. Heu de mostrar un missatge d'alerta si aquesta opció no està marcada.
    const formData = {
        name,
        surname,
        dni,
        email,
        password,
        birthdate,
        gender
    }

    sessionStorage.setItem('formData', JSON.stringify(formData));

    const storedFormData = sessionStorage.getItem('formData');

    window.location.href = 'meteo.html'
})
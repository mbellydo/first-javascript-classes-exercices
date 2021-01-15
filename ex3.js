class DNI {

    /**
     * 
     * @param {string} titular Indica el titular del Dni
     * @param {string} numero  Código en formato 12345678A
     * @param {string} caducidad  Fecha de caducidad del DNI, en format año-mes-dia
     */
    constructor(titular, numero, caducidad) {
        this.titular = titular;
        this.numero = numero;
        this.caducidad = caducidad;
    }

    // Nos devuelve 'true' o 'false' indicando si el DNI está calculado
    estaCaducado() {
        let today = new Date()
        
        if (this.caducidad >= today) {
            return false
        } else { 
            return true
        }
    }

    // Debe devolver 'true' si el DNI está bien formado, o 'false' en caso contrario
    esDniFormatoValido(dni) {
        let regexDni = /^[0-9]{8,8}[A-Z]/;
        
        if (regexDni.test(this.numero) == true) {
            return true;
        } else {
            return false;
        }
    }

    // Dado un número de DNI, nos calcula la letra. 
    // Buscar por Internet como calcular la letra de un DNI
    calculaLetraDni(dni) {        
        var validChars = "TRWAGMYFPDXBNJZSQVHLCKET";
        let resultado = 0;
        let residuo = Math.trunc(parseInt(dni) / 23);
        let numeroB = residuo * 23;
        resultado = parseInt(dni) - numeroB;

        return "Tu letra és la " + validChars.charAt(resultado);
    }
}

const midni = new DNI("Pedro Vallés", "1234567A", "1990-10-10");
console.log(midni.estaCaducado());
console.log(midni.esDniFormatoValido());
console.log(midni.calculaLetraDni("45963053"));


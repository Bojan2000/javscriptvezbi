/*const Osoba = {
    first_name : 'Niko',
    last_name : 'Nikolic' ,
    phone : '062589745',
    getNameandPhone : function () {
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

const Osoba2 = {
    first_name : 'Ivan',
    last_name : 'Ivanovic' ,
    phone : '062589746',
    getNameandPhone : function () {
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

Osoba.getNameandPhone();
Osoba2.getNameandPhone();
*/

/*function Osoba(first_name, last_name, phone) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;

    this.getNameAndPhone = function () {
        console.log(`${first_name} - ${phone}`);
    }
}

let osoba1 = new Osoba('Niko', 'Nikolic', '062856974');

oso
const Osoba = {
    first_name : 'Niko',
    getNameAndPhone : function () {
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

let niko = Object.create(Osoba);
niko.phone = '06789456';
niko.getNameAndPhone();

let ivan = Object.create(Osoba);
ivan.phone = '232323232';
ivan.first_name = 'Ivan';

ivan.getNameAndPhone();




class Osoba {
    constructor(first_name, last_name,phone) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
    }

    getNameAndPhone(){
        console.log(`${this.first_name} - ${this.phone}`);
    }
}

let osoba1 = new Osoba('Niko', 'Nikolic', '12345454545');
let osoba2 = new Osoba('Ivan', 'Gacic', '3656565445');

console.log(osoba1.phone);
console.log(osoba2.first_name);

osoba1.getNameAndPhone();
osoba2.getNameAndPhone();
*/


let config = {
    'ime_prezime' : {
        required: true,
        minlength: 3,
        maxlength: 50
    },
    'korisnicko_ime' : {
        required : true,
        minlength: 3,
        maxlength: 50
    },
    'email' : {
        required: true,
        email: true,
        minlength: 3,
        maxlength: 50
    },

    'broj_telefona' : {
        minlength: 9,
        maxlength: 13
    },

    'lozinka' : {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku' : {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'lozinka'
    }

};



let validator = new Validator(config);
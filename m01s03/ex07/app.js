var person = {
  firstName: 'Razvan',
  lastName: 'Radu',
  email: 'mareBoier@gmail.com',
  birthYear: 2003,
  pets: [
    { name: 'Alfie', species: 'Golden Retriever', age: 4 },
    { name: 'Pufi', species: 'Shitzu', age: 11 },
    { name: 'Vasile', species: 'dachshund', age: 3 },
  ],
  zipCode: '11111',
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.',
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent), anul de nastere al animalului de pe indexul 2. ',
);
console.log((2023 - person.pets[2].age).toString());

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. ',
);
var difference = 2023 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

var petName = person.pets[0].name;

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.',
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

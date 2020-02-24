function printLabel(name, street_address, city, state, zip_code) {
    let label = ` ${name} \n ${street_address} \n ${city}, ${state} ${zip_code}`;
    return label;
}

//Person 1
let person1_name = 'Brandon Davis';
let person1_street_address = '1111 One Street';
let person1_city = 'Memphis';
let person1_state = 'TN';
let person1_zip_code = '38111';

//Person 2
let person2_name = 'Dewayne Carter';
let person2_street_address = '2222 Two Street';
let person2_city = 'Memphis';
let person2_state = 'TN';
let person2_zip_code = '38222';

//Person 3
let person3_name = 'Seth Keyman';
let person3_street_address = '3333 Three Street';
let person3_city = 'Memphis';
let person3_state = 'TN';
let person3_zip_code = '38333';

console.log(printLabel(person1_name, person1_street_address, person1_city, person1_state, person1_zip_code));
console.log(printLabel(person2_name, person2_street_address, person2_city, person2_state, person2_zip_code));
console.log(printLabel(person3_name, person3_street_address, person3_city, person3_state, person3_zip_code));
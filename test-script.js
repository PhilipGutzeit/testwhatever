

var i = 1;
while  (i < 10) {
    document.write ('Durchlauf Nummer' + i + '<br></br>');
    i++;
console.log("Durchlauf Nummer " + i )
}

// function expression

'use strict';

const add = function (left = 1, right = 1) {
  return (left + right);
};

const sum = add();

console.log(sum);
document.write(sum);

const company = {
name: 'Test',
location: 'Berlin',
fullName () {
    return `${this.name} GbR`;
}
};

company.country ='Deu ';

console.log (company.name);

console.log (company.country);

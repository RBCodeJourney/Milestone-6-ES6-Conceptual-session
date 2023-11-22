const myName = 'Mehedi';
const age = 26;
const address = 'Rajshahi';
const bouName = 'Katappar Beti';
const sosurBari = 'BrahmonBaria'


const sentence = 'Amar naam' + myName + '\n Amar boyos' + age + '\n Amar Bari ' + address + '\n amr bou er naam' + bouName + '\n Bou er Bari' + sosurBari;

// console.log(sentence); 
const subjects = ['bangla', 'English', 'math', 'geography',]
const sentence1 = `
Amar name ${subjects[3]}
 Amar boyos ${age} 
 Amar amar boi gula holo  ${subjects.map(subject => subject).join(' ')} 
 Amar bou er name ${bouName} 
 Amar sosur bari ${sosurBari}`

console.log(sentence1)
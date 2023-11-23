//Exercise 1
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr){
    let sum = 0
    arr.forEach((number) => {
        sum += number;
    });
 
    return sum;
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]))

// Exercise 2 Section
let book = {};

book.title = "The Giving Tree";
book.author = "Shel Silverstein";
book.pageCount = 64;
book.readCount = 75;

book.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} pages and has been read ${this.readCount} times.`;
}
console.log(book.info());

//Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";
function reverseWords(sentence){
    let result = [];
    let words = sentence.split(" ");
    for (let i =0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }
    return result.join(" ");
}
console.log(reverseWords(sentence));

//Exercise 4
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
const resultArray = [];
const rows = csvData.split("\n");
const firstRow = rows[0].split(",");
for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(",");
    const obj = {};
    obj.name = rowData[0]; 
    obj.age = rowData[1];
    resultArray.push(obj);
}

console.log(resultArray);

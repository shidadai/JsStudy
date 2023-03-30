//console.log(), alert(), prompt()

// console.log("目前在学习JS")//页面打印的内容

// alert("你目前正在index.html文件")//页面出现视窗

// prompt("请输入年龄：")//页面出现可输入视窗

//Let and const
// let x=3;//变量
// console.log(x);//打印x
// x=x+8;//累加
// console.log(x);//再打印出来


// let name = prompt("请输入你的姓名：");
// console.log(name);


//++
// let x = 0;
// x++;//x = x+1;


//string,number

// let name = "Shi dai dai";
// console.log(name);

// console.log("Goodbye"-"e");
//"Goodby"
//"Error"

//JS string + number = concat
//1.number => string
//2.+ => concat

// let n1 = 20;
// let n2 = 30;
// let name2 = "Johnson";
// let n3 = 10;
// let n4 = 15;
// console.log(n1 + n2 + name2 + n3 + n4);//"50Johnson1015"

//1. one Line comment

//this is JavaScript Code

//2.Multiple Lines comment

// let pi = 3.1415926535;

// pi.toFixed(5);

// console.log(pi);

// let name = "Wilson";
// console.log(name.length)

// let name = "Wilson has lived in Taiwan for many years.";
// console.log(name.split(""));

// let isPremium = true;
// console.log(isPremium);

// let x = "true";//string
// let y = true;//boolean

// console.log(typeof x);
// console.log(typeof y);

// console.log(condition && condition2);//且（两个条件都要满足）
// console.log(condition || condition2);//或（满足一个条件就可）


// let thereIsInternet = true;

// if (thereIsInternet){
//     console.log("Execute the running game.");
// }
// else{
//     console.log("Display the goole search page.")
// }

// let age = prompt("请输入你的年龄：")

// age = Number(age);

// if (age < 0){
//     alert("请不要开玩笑，请输入正确年龄");
// }else if(age <= 12){
//     alert("你的儿童票一张100元");
// }else if((12 < 65) && (age <=65)){
//     alert("你的成人票一张250元");
// }else if((age > 65) && (age < 100)){
//     alert ("您的敬老票一张150元");
// }else{
//     alert("请不要开玩笑，请输入正确年龄");
// }

//number => string      number.toString()
//string => number      Number(string)

// let friends = ["John", "Sandy", "Alex" ,"Jim"];

// index, length
// console.log(friends[0]);
// console.log(friends[3]);

//push, pop, shift, unshift 4 methods 推、弹出、移位、取消移位4种方法

// Function 函数

//function declaration 声明函数
// function sayHi(){
//     console.log("Hi");
//     console.log("My name is Wilson Ren.");
// }

//invoke, execute a function 调用函数
// sayHi();

//调用多个变量
// function sayHi(name , age){
//     console.log("Hi");
//     console.log("My name is"+ name + ".");
//     console.log("I am" + age +"years old now.");
// }

//invoke, execute a function 调用函数
// sayHi(Jack,21);
//function knowledge
//parameter参数
//return

//自动把摄氏度换算华氏度
// function convert(oc){
//     return oc * 1.8 + 32;
// }

// let input = prompt("请输入温度（°C）:");
// let result = convert(input);
// alert("换算后的温度为"+ result + "°F");


// let Wilson = {
//     //properties setting
//     first_name:"Wilson",
//     lasr_name:"Ren",
//     age: 30,
//     is_married: false,
//     spouse: null,

//     //methods setting
//     sayHi() {
//         console.log("Wilson says hi.");
//     },
//     walk(){
//         console.log("Wilson is walking on the street.");
//     },
//     say(word){
//         console.log("Wison says" + word);
//     },
//     sayAge() {
//         console.log("Wilson says I am " + this.age + "years old.");
//     }
// };

//[],dot notation
// Wilson.age = 35; 
// Wilson.sayAge();
 

// for loop
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }


//while Loop
// let j = 0;
// while (j <=10){
//     console.log(j);
//     j++;
// }

// //nested Loop
// for(let i = 0; i < 13; i++){
//     for(let j = 0; j < 22; j++){
//         console.log(i,j);
//     }
// }

//10*5=50
//13*22=6

// let answer = Math.floor(Math.random()*100);
// let n1 = 0;
// let n2 = 99;

// while (true){
//     let guess = Number(prompt("请输入你猜测的数字("+ n1 + "~"+ n2 +")"));
//     if(guess < n1||guess >n2){
//         alert("你猜错了，再猜猜？")
//     }

//     if(guess == answer){
//         alert("你猜对了！答案就是"+answer)
//         break;
//     }else if(guess<answer){
//         n1 = guess;
//     }else if(guess>answer){
//         n2 = guess;
//     }
// }


// Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
//编写一个名为“printMany”的函数，打印出整数1、2、3。。。，100.
// function printMany(){
//     for (let i = 1;i<=100;i++){
//         console.log(i);
//     }
// }
// printMany();



// function printEvery3(){
//     for (let i = 1;i<=88;i+=3){
//         console.log(i);
//     }
// }

// Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
//编写一个名为“printEvery3”的函数，打印出整数1、4、7、10。。。，88.
// function printEvery3(){
//     let i = 1;
//     while(i<=88){
//         console.log(i);
//         i+=3;
//     }
// }
// printEvery3();

// Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
//编写一个名为“stars”的函数，该函数以一个整数作为输入，并返回n个连续“*”的串联。
// function stars(n){
//     let result="";
//     for(let i = 0;i<n;i++){
//     result+="*";
//     }
    
//     return result;
// }
// console.log(stars(3));
// console.log(stars(10));

// Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
//编写一个名为“isUpperCase”的函数，检查字符串的第一个字母是否为大写。
// function inUpperCase(str){
//     if (str.length == 0){
//         return false;
//     }

//     if (str[0]==str[0].toUpperCase()){
//         return true;
//     } else {
//         return false;
//     }

//更好的写法
        // return str[0]==str[0].toUpperCase();
// }

// console.log(isUpperCase("ABCD"));//returns true
// console.log(isUpperCase("ABCD"));//returns false
// console.log(isUpperCase("aBCD"));//returs false


// Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
//编写一个名为“isAllUpperCase”的函数，检查给定字符串中的所有字母是否都是大写的。
// function isAllUpperCase(str){
//     if(str.length == 0){
//         return false;
//     }

//     let allUpperCase = true;
//     for (let i = 0; i < str.length; i++){
//         if (str[i] != str[i].toUpperCase()){
//             allUpperCase = false;
//         }
//     }

//     return allUpperCase;
// }

// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false


// Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
//编写一个名为“position”的函数，打印出第一个大写字母及其索引位置。如果未找到，则打印-1。
// function position(str){
//     for (let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toUpperCase()){
//             return str[i] + "" +1;
//         }
//     }

//     return -1;
// } 

// console.log(position("abcd")); // prints -1
// console.log(position("AbcD")); // prints A 0
// console.log(position("abCD")); // prints C 2


// Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.
//编写一个名为“findSmallCount”的函数，该函数以一个整数数组和一个整数作为输入，并返回一个整数，指示数组中有多少元素小于输入整数。
// function findSmallCount(arr,n){
//     let counter = 0;
//     for (let i = 0; i< arr.length; i++){
//         if (arr[i] < n){
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0


// Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.
//编写一个名为“findSmallerTotal”的函数，该函数以一个整数数组和一个整数作为输入，并返回数组中小于输入整数的所有元素的和。
// function findSmallerTotal(arr,n){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < n){
//            sum += arr[i];
//         }
//     }
//     return sum;
// }

// console.log(findSmallerTotal([1, 2, 3], 3)) // returns 3
// console.log(findSmallerTotal([1, 2, 3], 1)) // returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)) // returns 25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)) // returns 0

// Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.
//编写一个名为“findAllSmall”的函数，该函数以一个整数数组和另一个整数作为输入，并返回一个包含所有小于输入整数的元素的整数数组。
// function findAllSmall(arr,n){
//     let answer = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < n){
//            answer.push (arr[i]);
//         }
//     }
//     return answer;
// }

// console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]

// Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.
//编写一个名为“sum”的函数，它取一个数字数组，并返回输入数组中所有元素的和。
// function sum(arr){
//     let result = 0;
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return answer;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
// console.log(sum([])); // return 0
// console.log(sum([-10, -20, -30])); // return -60

// Write a function called "stars" which prints out layers of stars in the following pattern:
// 编写一个名为“恒星”的函数，该函数按以下模式打印出恒星层：
// function stars(n){
//     for (let i = 1; i <= n; i++){
//         let line = "";
//         for(let j = 0; j < i; j++){
//             line += "*";
//         }
//         console.log(line);
//     }
// }

// stars(1);
// console.log("-------------");
// stars(4);
// console.log("-------------");
// stars(10);

// Write a function called "makeStars" which prints out stars in the following pattern:
//编写一个名为“makeStars”的函数，该函数按以下模式打印出星星：
// function makeStars(n){
//     let result = "*";
//     for (let i = 2; i <= n; i++){
//         let s = "\n";
//         for (let j = 0; j < i; j++){
//             s += "*";
//         }
//         result +=s;
//     }
    
//     console.log(result);
// }

// makeStars(1);
// console.log("-------------")
// makeStars(2);
// console.log("-------------")
// makeStars(15);


// Write a function called "stars2" which prints out layers of stars in the following pattern:
//编写一个名为“stars2”的函数，该函数按以下模式打印出恒星层：
// function stars2(n){
//     for (let i = 1; i <= n; i++){
//         let line = "";
//         for (let j = 0; j < i; j++){
//            line +="*";
//         }
//         console.log(line);
//     }
    
//     for(let i = n - 1; i > 0; i--){
//         let line ="";
//         for(let j = 0; j < i; j++){
//             line +="*";
//         }
//         console.log(line);
//     }
// }

// stars2(20);

// Write a function called "table" which takes an input n, and prints out n x 1 to n x 9
//编写一个名为“table”的函数，它接受输入n，并打印出n x 1到n x 9
// function table(n){
//     for(let i = i; i <= 9; i++){
//         console.log(n + "*" + i + "=" + n * i);
//     }
// }

// table(137);

// Write a function called "table9to9" that prints out the multiplication table:
// 编写一个名为“table9to9”的函数，打印出乘法表：
// function table9to9(){
//     for (let i = 1; i <= 9; i++){
//         for(let j = 1; j <= 9; j++){
//             console.log(i + "*" + j + "=" + i *j);
//         }
//     }
// }

// table9to9();

// Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.
//编写一个名为“fib”的函数，该函数以整数$n$为输入，并返回斐波那契序列的第$n$个元素。
// function fib(n){
//     let arr =[0,1];
//     let i = 0;
//     while(arr.length <= n){
//         arr.push(arr[i] + arr[i+1]);
//         i++;
//     }
//     console.log(arr);
//     console.log(arr[n]);
// }

// fib(8);


// Write a function called "reverse" that takes a string as input, and returns the reverse string.
//编写一个名为“reverse”的函数，该函数以字符串作为输入，并返回反向字符串。
// function reverse(str){
//     let result="";
//     for (let i = str.length-1;i>=0;i--){
//         result += str[i];
//     }
// }

// console.log(reverse("abcd")); // returns "dcba"
// console.log(reverse("I am a good guy.")); // returns ".yug doog a am I"

// Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.
//编写一个名为“swap”的函数，该函数以字符串为输入，并返回一个新字符串，其中小写变为大写，大写变为小写。
// function swap(str){
//     let result = "";
//     for (let i = 0; i < str.length; i++){
//         if(str[i] == str[i].toUpperCases){
//             result += str[i].toLowerCase();
//         }else{
//             result += str[i].toUpperCases();
//         }
//     }
//     console.log(result);
//     return result;
// }

// Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.
//编写一个名为“findMin”的函数，该函数以数组为输入，并返回输入数组中的最小元素。
// function findMin(arr,n){
//     for (let i = 0; i< arr.length;i++){
//             let counter = 0;
//             for(let j = 0; j < arr.length;j++){
//                 if(arr[j]< arr[i]){
//                     counter++;
//                 }
//             }
//             if(counter == n-1){
//                 return arr[i];
//             }
//         }
//     }

//     console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
//     console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5

// Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.
// 编写一个名为“mySort”的函数，该函数以整数数组作为输入，并返回输入数组的排序版本。
    // function findMin(arr){
    //     let min = arr[0];
    //     for(let i = 1; i < arr.length;i++){
    //         if (arr[i] < min){
    //             min =arr [i];
    //         }
    //         return min;
    //     }
    // }

    // function mySort(arr){
    //     let result = [];
    //     while (arr.length>0){
    //         let min = findMin(arr);
    //         result.push(min);
    //         arr.splice(arr.indexOf(min),1);
    //     }
    //     return result;
    // }

    // console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]


// Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.
//编写一个名为“isPrime”的函数，该函数以整数为输入，并返回一个布尔值，指示输入数字是否为素数。
// function isPrime(n){
//     if(n == 1){
//         return false;
//     }

//     let starter = 2;
//     while (starter < n){
//         if (n % starter == 0){
//             return false;
//         }
//         starter++;
//     }

//     return true;
// }

// console.log(isPrime(1)); // returns false
// console.log(isPrime(5)); // returns true
// console.log(isPrime(91)); // returns false
// console.log(isPrime(1000000)); // returns false


// Write a function called "confirmEnding" that takes 2 strings as input, and returns a boolean value that indicates if the first input ends with the second input.
// 编写一个名为“confirmEnding”的函数，该函数以2个字符串作为输入，并返回一个布尔值，指示第一个输入是否以第二个输入结束。
// function confirmEnding(str1,str2){
//     let k = str1.length-1;
//     for(let i = str2.length -1; i>=0; i--){
//         if(str2[i] != str1[k]){
//             console.log(false);
//             return false;
//         }else{
//             k--;
//         }
//     }
//     console.log(true);
//     return true;
// }


// confirmEnding("Bastian", "n"); // true
// confirmEnding("Connor", "n"); // false
// confirmEnding("Open sesame", "same"); // true


// Write a function called "findDuplicate" that an array of integers as inputs, and check if there's any duplicate values in the array.
//编写一个名为“findDuplicate”的函数，将整数数组作为输入，并检查数组中是否有重复的值。
// function findDuplicate(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(i != j && arr[i] == arr[j]){
//                 console.log(true);
//                 return true;
//             }
//         }
//     }
//     console.log(false);
//     return false;
// }

// findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
// findDuplicate([]); // returns false
// findDuplicate([3, 4, 5, 6, 7, 10000, 0]); // returns false 


// Write a function called "palindrome" that checks if the input string is a palindrome.
//编写一个名为“回文”的函数，检查输入字符串是否为回文。
function palindrome(str){
    let i = 0;
    let j = str.length -1;
    while (i < j){
        if (str[i] != str[j]){
            console.log(false);
            return false;
        }
        i++;
        j--;
    }
    console.log(true);
    return true;
}

palindrome("bearaeb"); // true
palindrome("Whatever revetahW"); // true
palindrome("Aloha, how are you today?"); // false
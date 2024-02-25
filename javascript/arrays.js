// normal array : collection of similar types of variables
// but in javascript array can have different types of variables number string boolean etc 
const arr=['nice',7654, true,null,undefined];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

const movies=['Salaar', 'Animal','Wonka', 'Arrow','PeaceMaker'];
console.log(movies.length);
console.log('Nice'.length);

//indexing starts from 0
console.log(movies[0]);//also works for string
console.log(movies.indexOf('PeaceMaker'));//also works for string
//console.log(movie[-4]); does not work
console.log(movies.at(-4));//also works for string
movies[3]="Batman" //not work for string
console.log(movies);
// movies.at(-4)="Superman";//not possible, use [] instead of at at is just for access and not for assignment  
movies[3]="Arrow";
console.log(movies[20]);//galat index me undefined ata hai 
//undefined works as a conditional in javascript as false 



//SLICING  ---> no modification in original array only display output
console.log(movies)
console.log(movies.slice(1,4))
console.log(movies.slice(2,40)) //if array se bada end index dene pe bhi pura array hi aa jata hai
console.log(movies.slice(20,40)) //if array se bada start index dene pe empty array aa jata hai
console.log(movies.slice(-4,3))


//Modifiying STACK Operations PUSH AND POP
movies.push("Superman")//add at end
console.log(movies);
movies.unshift('Flashpoint')//add at start
console.log(movies);
movies.pop()//remove from end
console.log(movies);
movies.shift()//remove from start
console.log(movies);

//SPLICE is a powerful method to insert and replace elements at any position
movies.splice(3,2)//remove 2 elements from index 3
console.log(movies);
movies.splice(3)//no changes
console.log(movies);
movies.splice(2,2)//remove 2 elements from index 2
console.log(movies);
movies.splice(2,2,"Superman","Batman")//remove 2 elements from index 2 and add 2 elements
console.log(movies);
movies.splice(2,2,'pitman','Ironman','bulldog')//remove 2 elements from index 2 and add 3 elements
console.log(movies);
movies.splice(2,0,'pitpit')//add 1 element at index 2
console.log(movies);
console.log(movies.splice(2,2))//remove 2 elements from index 2 and display them
// function rec(arr){
//     let recele=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 recele.push(arr[i])
//             }
//         }
//     }
//     return recele
// }
// const arr=[1,2,2,3,3,4,5,7,4,5,6,2]
// const xyz=rec(arr)
// console.log(xyz)



// function reoccurred(arr){
//     let reoccurredElements = [];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 reoccurredElements.push(arr[i]);
//             }
//         }
//     }
//     return reoccurredElements;
// }

// const arr=[1,2,3,4,5,7,4,5,6,2];
// const xpans=reoccurred(arr);
//console.log(xpans);
// var str = "java"
// for(var i=0;i<str.length;i++){
//     console.log(str[i])

// //console.log(str.split('').join(' '));

// }
// var str = "java";
// for (var i = 0; i < str.length; i++) {
//     process.stdout.write(str[i] + " ");
// }
const str = "java"
const rev = str.split("").reverse().join(" ")
console.log(rev)

const stri = "welcome"
arr = stri[0]+stri[3]
console.log(arr)


// const spi =["animal","brids","dog"]
// const spi2 = spi.slice(2)
// console.log(spi2)

const spi =["animal","brids","dog"]
const sp= spi.splice(1,2 ,"dock")
console.log(sp)
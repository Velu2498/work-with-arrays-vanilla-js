arr=[1,2,3,4,6,-1,5,0]
sum=5
result=new Array
for(i of arr){
    for (j of arr){
        if(i+j == sum){
            result.push(`(${i},${j})`)
        }
    }
}

result.sort()
console.log(result)
for(i=0;i<result.length/2;i++){
    console.log(result[i])
}



// for (i of result){
//     console.log(i[1],i[3])
// }
 
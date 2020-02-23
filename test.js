arr=[1,2,3,4,7,5,0,1,-2]
// arr=[1,4,3,2]
sum=5
result=new Array
print=new Array
for(i of arr){
    for (j of arr){
        if(i+j == sum){
            result.push(`(${i},${j})`)
        }
    }
}

//method 1
result.sort()
console.log(result)
for(i=0;i<result.length/2;i++){
    // console.log(print)
    // if(result[i] in print){ continue}
    if(print.includes(result[i])) continue
    else{
        print.push(result[i])
        console.log(result[i])
    }
}


//method 2
for (i of result){
    // console.log(i[1],i[3])
    on=i[1],
    tw=i[3]
    if(on=="-") on=i[2],tw=i[4]
    if(tw=="-") tw=i[4]
    // console.log(i)
    for(j of result){
        o=j[1]
        t=j[3]
        if(o=="-") o=j[2],t=j[4]
        if(t=="-") t=j[4]
        // console.log(o,t)
        if(on==t && tw==o){ 
            // result.pop(j)
            result.splice( result.indexOf(j), 1 );
        }
    }
    
}
console.log(result)
 


let arr = [[1,2,3,4],[4,3,2,1],[3,4,5,6]]

function sum(arr){
    let summ=0
    for(let i=0;i<arr.length;i++){
            summ += arr[i]
    }
    return summ
}
let object1 ={}
for(let i=0;i<arr.length;i++){
    object1[i] = sum(arr[i])
}
console.log(object1)

function palin(s){
    let i=0;
    let j=s.length-1
    while(i<j){
        if(s.charAt(i)!=s.charAt(j)){
            return false
        }
        i++;
        j--
    }
    return true
}

let s="abba"
console.log(palin(s))

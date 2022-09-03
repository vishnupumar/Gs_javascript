let arr = [['a',1],['b',2]];
let map = {}
for(let i=0;i<arr.length;i++){
            map[arr[i][0]] = arr[i][1]
}
console.log(map)

let brr = [1,'abc',[1,2,3],{hello : 'hello'}]
let brrT = Array()
for(let i=0;i<brr.length;i++){
    let temp = typeof brr[i]
    if(temp == 'number' || temp == 'string'){
        brrT[i] = brr[i]
    }
}
console.log(brrT)

let crr = [1,[2,3,[4,5],[6,7,[8,9]]]]

console.log(crr.toString())

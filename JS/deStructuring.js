// const a = [10,20,30,40]

// const [b,c,d,f,e = 200] = a
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


const obj = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
}

const {a, b, c, xyz = 'new data'} = obj
console.log(a)
console.log(b)
console.log(c)
console.log(xyz)



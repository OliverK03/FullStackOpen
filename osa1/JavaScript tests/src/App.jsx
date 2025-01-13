const x = 1
let y =5

console.log(x, y)
y += 10
console.log(x, y)
y = 'teksti'
console.log(x, y)

const t = [1, -1, 3]
const t1 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t1

console.log(first, second)
console.log(rest)

const t2 = t.concat(5)
const m1 = t.map(value => value * 2)
const m2 = t.map(value => '<li>' + value + '</li>')

console.log(m1)
console.log(m2)
console.log(t2)

console.log(t.length)
console.log(t[1])

t.push(5)

console.log(t.length)

t.forEach(value => {
    console.log(value)
})

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
}

const object2 = {
    name: 'Full Stack -websovelluskehitys',
    level: 'aineopinto',
    size: 5,
}

const object3 = {
    name: {
        first: 'Juha',
        last: 'Tauriainen',
    },
    grades: [2, 3, 5, 3],
    department: 'TKTL',
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

object.address = 'Tapiola'
object['secret number'] = 12341

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
    console.log(p)
    return p*p
}

const tSquared = t.map(p => p * p)




export default App
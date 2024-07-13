interface item {
    name : string
    price : number
}

const book : item ={
    name : 'ESSENTIAL TYPESCRIPT',
    price : 500
}
const book2 : item ={
    name : 'APPLE',
    price : 650
}
console.log(`book.name: ${book.name}, price: $${book.price}`)
console.log(`book2.name: ${book2.name}, price: ${book2.price}`)
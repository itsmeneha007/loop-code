const book ={
    title:"The Hobbit",
    author:"J.R.R Tolkien",
    year:1937
}
for(let key in book){
    console.log(`${key}: ${book[key]}`)
}
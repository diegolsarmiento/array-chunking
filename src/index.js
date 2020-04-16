function chunck(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length){
        chunked.push(array.splice(index, index+size));
        index += size;
    }

    return chunked;
}

console.log(chunck([1,2,3,4,5,6],2));
// custom iterator...

function range(start, end, step){
    let current = start;
    return{
        [Symbol.iterator]: function(){
            return{
                next(){
                    let result;
                    if(current < end){
                        result = {
                            done: false,
                            value: 'JS'
                        };
                        current += step;
                        return result;
                    }
                    else{
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
};
const rang = [...range(1,30,2)];

console.log(rang);

const iterator = rang[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().done);

//Create Object iterable

let object = {
    value1: 1,
    value2: 2,
    value3: 3,
    value4: 4
}

Object.prototype[Symbol.iterator] = function(){
    const entries = Object.entries(object);
    let count = entries.length;
    let index = 0;
    return {
        next() {
            if(count > 0){
                let result = {
                    done: false,
                    value: entries[index][1]
                }
                count--;
                index++;
                return result;
            }
            return {done: true}
        }
    }
};

console.log([...object]);

for(let element of object){
    console.log(element)
}
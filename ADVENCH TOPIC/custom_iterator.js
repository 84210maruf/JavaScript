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

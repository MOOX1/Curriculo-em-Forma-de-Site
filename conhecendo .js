const multi = (...args) => args.reduce((acc,value) => acc * value, 1)

const sum = (...rest) => {
    multi.apply(undefined, rest);
};


console.log(multi())
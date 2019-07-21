const obj: {
    foo: {
        bar: {
            baz: number,
        },
    },
} = {
    foo: {
        bar: {
            baz: 42,
        },
    },
};

const baz = obj?.foo?.bar?.baz; // 42
console.log(`obj?.foo?.bar?.baz ==> ${baz}`);

const safe = obj?.qux?.baz; // undefined
console.log(`obj?.qux?.baz ==> ${safe}`);

// Optional chaining and normal chaining can be intermixed
const a = obj?.foo.bar?.baz; // Only access `foo` if `obj` exists, and `baz` if
// `bar` exists
console.log(`obj?.foo.bar?.baz ==> ${a}`);

// Example usage with bracket notation:
const b = obj?.['foo']?.bar?.baz; // 42
console.log(`obj?.['foo']?.bar?.baz ==> ${b}`)

export {
    obj
};

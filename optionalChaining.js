const complexObject = {
    id: 1,
    name: 'Main Object',
    info: {
        description: 'This is a complex nested object.',
        author: {
            firstName: 'John',
            lastName: 'Deo'
        }
    },
    data: {
        values: [10, 20, 30],
        settings: {
            isEnabled: true,
            maxItems: 5
        }
    }
};

console.log(complexObject.contact)
// we should use question(?) mark after object keys like this .
console.log(complexObject?.contact?.phone)
const products = [
    'Dell Inspiron Laptop',
    'Dell laptop',
    'HP Probook Laptop',
    'HP notebook laptop',
    'Samsung Phone',
    'Xamoi Phone',
    'Symphony phone',
    'oppo phone',
    'dell table Fan',
    'celing fan',
    'laptop'
];

const seraching = 'laptop';
const ouput = [];
// search using indexOf ()
for (const product of products) {
    if (product.toLowerCase().indexOf(seraching.toLowerCase()) != -1) {
        // ouput.push(product);
    }
}

// search using includes()
for (const product of products) {
    if (product.toLowerCase().includes(seraching.toLowerCase())) {
        // ouput.push(product)
    }
};

// search with startsWith()
for (const product of products) {
    if (product.toLowerCase().startsWith(seraching.toLowerCase())) {
        // ouput.push(product)
    }
};

// search with endsWith()
for (const product of products) {
    if (product.toLowerCase().endsWith(seraching.toLowerCase())) {
        ouput.push(product)
    }
}




console.log(ouput);
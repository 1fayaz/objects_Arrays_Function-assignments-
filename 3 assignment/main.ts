interface Product {
   name: string;
   model: string;
   cost: number;
   quantity: number;
}

let inventory: Product[] = [];

let product1: Product = {
   name: "Macbook Air",
   model: "M1 13-inch",
   cost: 700,
   quantity: 3
};

let product2: Product = {
   name: "Macbook Pro",
   model: "M1 16-inch",
   cost: 500,
   quantity: 2
};

let product3: Product = {
   name: "lenovo",
   model: "t580",
   cost: 350,
   quantity: 5
};

inventory.push(product1, product2, product3);

console.log("Quantity of the third product:", inventory[2].quantity);

let product4: Product = {
   name: "Macbook Air",
   model: "M2 15-inch",
   cost: 1400,
   quantity: 13
};

inventory.push(product4);

console.log("Updated inventory:", inventory);
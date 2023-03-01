const sayHello = () => {
    console.log("Hello!");
}

console.log("Step 1");
try {
    sayHello();
    console.log("Step 2");
} catch (error) {
    console.log("Step 3");
    console.error(error);
}
console.log("Step 4");
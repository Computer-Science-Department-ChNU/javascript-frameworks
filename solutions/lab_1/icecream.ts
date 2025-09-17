function calculateIceCreamPrice(): void {
    let price: number = 0;

    // @ts-ignore
    const size = prompt("Choose cup size: small (10 UAH) or large (25 UAH)").toLowerCase();

    if (size === "small") {
        price += 10;
    } else if (size === "large") {
        price += 25;
    } else {
        console.log("Invalid cup size!");
        return;
    }

    const toppingsInput = prompt("Choose toppings (at least one). Available: chocolate, caramel, berries. Enter separated by commas:");
    // @ts-ignore
    const toppings = toppingsInput.toLowerCase().split(",").map(t => t.trim());

    if (toppings.length === 0 || toppings[0] === "") {
        console.log("At least one topping is required!");
        return;
    }

    for (let topping of toppings) {
        if (topping === "chocolate") price += 5;
        else if (topping === "caramel") price += 6;
        else if (topping === "berries") price += 10;
        else console.log(`Topping '${topping}' does not exist and will not be included.`);
    }


    const marshmallow = prompt("Add marshmallow? (yes/no)")?.toLowerCase();
    if (marshmallow === "yes") {
        price += 5;
    }

    console.log(`Total price of your ice cream: ${price} UAH`);
}

calculateIceCreamPrice();

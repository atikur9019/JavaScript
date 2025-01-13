const takeOrder = (Customer, callback) => {
    console.log(`Taking order from from ${Customer}`);
    callback(Customer);
};

const processOrder = (Customer, callback) => {
    console.log(`Processing order for  ${Customer}`);

    setTimeout(() => {
        console.log("Cooking Done");
        console.log(`order processed for  ${Customer}`);
        callback(Customer);
    }, 3000);
};

const completeOrder = (Customer) => {
    console.log(`completed order for  ${Customer}`);
};

document.querySelectorAll("button").forEach((singleBtn) => {
        singleBtn.addEventListener("click", (e) => {
            let customer = e.target.dataset.customer;
            takeOrder(customer, (customer) => {
                processOrder(customer, (customer) => {
                    completeOrder(customer);
                });
            });
        });
});
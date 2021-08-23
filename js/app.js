
// default price
function defaultCost(item) {
    document.getElementById(item + '-cost').innerText = 00;
    totalCost()
}

// 16gb memory & 1tb storage price
function moreStorage(storage) {
    document.getElementById(storage + '-cost').innerText = 180;
    totalCost()
}

// get cost amount value
function getCostAmount(items) {
    const cost = document.getElementById(items + '-cost').innerText;
    const costAmount = parseFloat(cost);
    return costAmount;
}

// total cost
function totalCost() {
    const defaultCost = getCostAmount('default');
    const memoryCost = getCostAmount('memory');
    const storageCost = getCostAmount('storage');
    const deliveryCost = getCostAmount('delivery')
    const totalCost = (defaultCost + memoryCost + storageCost + deliveryCost);

    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total').innerText = totalCost;
}


// memory cost
document.getElementById('memory-normal').addEventListener('click', function () {
    defaultCost('memory')
})
document.getElementById('memory-more').addEventListener('click', function () {
    moreStorage('memory')
})


// storage cost
document.getElementById('storage-normal').addEventListener('click', function () {
    defaultCost('storage')
})
document.getElementById('storage-extra').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalCost()
})
document.getElementById('storage-more').addEventListener('click', function () {
    moreStorage('storage')
})



// delivery cost
document.getElementById('delivery-normal').addEventListener('click', function () {
    defaultCost('delivery')
})
document.getElementById('delivery-special').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalCost()
})



// promo code apply
function applyPromoCode() {
    const promoCode = document.getElementById('promo-code').value;
    const totalPrice = document.getElementById('total-cost').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    if (promoCode == 'stevekaku') {
        const discount = totalPriceNumber * 0.2;
        document.getElementById('total').innerText = Math.ceil(totalPriceNumber - discount);

        const promoMsgText = document.getElementById('promo-code-msg');
        const promoMsg = promoMsgText.innerText;

        promoMsgText.innerText = "20% Discount has been applied ✅"

        // clear input
        document.getElementById('promo-code').value = '';
    } else {
        alert("Your code is not valid or Discount already applied!");
        document.getElementById('promo-code').value = '';
    }
}


// bootstrap 5 tooltip script
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
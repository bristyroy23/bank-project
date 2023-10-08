let depositInput =  document.getElementById('deposit-input');
let withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let allDeposit = [];
let allwithdraw = [];
let withdrawHistory;
let depositHistory;
let newBalance;
let newWithdrawAmount;


depositBtn.addEventListener('click', function() {
    let currentDeposit = parseFloat(document.getElementById('deposit-total').innerText)
    newBalance = currentDeposit + depositAmount;
    document.getElementById('deposit-total').innerText = newBalance;
    document.getElementById('balance-total').innerText = newBalance;
    let date = new Date();
    allDeposit.push(depositAmount)

    const p = document.createElement('p')
    p.classList.add('text-sm')
    allDeposit.forEach(function(singelDeposit,index){
        p.innerText = `${index + 1}---${singelDeposit} Tk ${date.toDateString()} time: $(date.toLocaleTimeString()}`
    })

})

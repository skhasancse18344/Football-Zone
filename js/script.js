const cartArray=[];
    function display(playerList){
        let totalPrice = 0;
        const playerNameList = document.getElementById('player-name-list');
         if(playerList.length>5){
            alert("You Cant Add More Player");
            return;
         }
         else{
            playerNameList.innerText='';
            for (let i=0; i < playerList.length; i++){
                const price = cartArray[i].playerCost;
                totalPrice = totalPrice + price;
                const li = document.createElement("li");
                li.innerHTML = `
                <p> ${cartArray[i].playerName} </P>
                `
                playerNameList.appendChild(li);
   }
         }
    const selectedPlayer = document.getElementById('selected-player')
     selectedPlayer.innerText = cartArray.length;
    
}

    function displayPlayer(element){
        element.disabled = true;
        const playerName = element.parentNode.parentNode.children[1].children[0].innerText;
        const cost = document.getElementById('coast');
        const playerCostString = cost.value;
        const playerCostInput = parseInt(playerCostString);
    
        const player = {
            playerName : playerName,
            playerCost : playerCostInput,
        }
        cartArray.push(player);
        display(cartArray);
    }

  document.getElementById('calculate').addEventListener('click',function(){
    const cost = document.getElementById('coast');
    const playerCostString = cost.value;
    const playerCostInput = parseInt(playerCostString);

    let playerNameCount = document.getElementById('player-name-list');
    let arrayLength = playerNameCount.children.length;

    // let arrayLength = cartArray.length;
    const totalPrice = arrayLength * playerCostInput;
    
    let playerExpense = document.getElementById('player-expense');
    let playerExpenseAmount = playerExpense.innerText;
    playerExpense.innerText = totalPrice;

    })

function calculateTotal(){
    const cost = document.getElementById('coast');
    const playerCostString = cost.value;
    const playerCostInput = parseInt(playerCostString);
    let arrayLength = cartArray.length;
    const totalPrice = arrayLength * playerCostInput;

    const managerCost = document.getElementById('manager-cost');
    const managerExpenseString = managerCost.value;
    const managerExpense = parseInt(managerExpenseString);

    const coachCost = document.getElementById('coach-cost');
    const coachExpenseString = coachCost.value;
    const coachExpense = parseInt(coachExpenseString);

    

    let totalExpense = document.getElementById('total');
    let totalAmount = totalExpense.innerText;
    totalAmount = totalPrice + managerExpense + coachExpense ;
    totalExpense.innerText = totalAmount;
}

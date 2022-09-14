var initialPrice = document.querySelector('#initial-price');
var stocks = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var checkBtn = document.querySelector('#check-btn');
var outPutBox = document.querySelector('#output-box');

checkBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value)
    var stk = Number(stocks.value)
    var curr = Number(currentPrice.value)
    calculateProfitAndLoss(ip,stk,curr);

}



function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current) {

        var loss = (initial-current)*quantity

        var lossPercentage=( (loss / (initial*quantity))*100);

        outPutBox.innerHTML="Hey  your loss is" + loss + "and the Percent is" +lossPercentage+"%";

    }else if (current>initial){

        var profit=(current-initial)*quantity;

        var profitPercentage=( (profit /(initial*quantity))*100);

        outPutBox.innerHTML="hey your profit is" + profit + "and the Percent is" + profitPercentage+"%";
  } else {

    outPutBox.innerText="no profit no gain no loss no pain";

  }
}
 

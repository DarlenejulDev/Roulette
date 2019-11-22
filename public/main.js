
let colors=['red','black']


let btn=document.querySelector('.button')
let bank=1000

let result=document.querySelector('.result')


btn.addEventListener('click',()=>{

  let colorRandom=Math.floor(Math.random()*2)
  let color=document.querySelector(".color").value
  console.log(color)


  let amount=document.querySelector('.amount').value
  console.log(amount)
  let earnings
  let winText
  let won

if(color===colors[colorRandom]){
  earnings = (amount * 2);
  winText = "Congrats! You Win, you now have $"
  won = true;
} else{
  won = false;
  earnings = -amount;
  winText = "Unfortunately,you have lost. You now have $"
}

bank += earnings;
result.innerHTML = ` ${winText}${bank} in your account.`;

fetch('userInput',{
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'won': won,
            'updateMoney': earnings
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
        })
      });

// let btn2=document.querySelector('.btn-default')
//
// btn2.addEventListener('click',()=>{
//   let hide=document.querySelector('.hide').style.display='none'
// })

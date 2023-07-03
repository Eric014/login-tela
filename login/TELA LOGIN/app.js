const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


/* CPF CONFIG */

const cpf = document.querySelector("#cpf")
cpf.addEventListener('keypress', () => {
    let inputLength = cpf.value.length
    if (inputLength == 3 || inputLength == 7) 
         {
            cpf.value += '.'
         }
    else if (inputLength == 11)
         {
            cpf.value += '-'
         }
  })

  /* CONFIG DATA */

  const datatime = document.querySelector("#datatime")
datatime.addEventListener('keypress', () => {
    let inputLength = datatime.value.length
    if (inputLength == 2) 
         {
          datatime.value += '/'
         }
    else if (inputLength == 5)
         {
          datatime.value += '/'
         }
  })
  
    /* CONFIG CELL */
  
    const tel = document.querySelector("#tel")
tel.addEventListener('keypress', () => {
    let inputLength = tel.value.length
    if (inputLength == 0) 
         {
          tel.value += '('
         }
         else if (inputLength == 3)
         {
          tel.value += ') '
         }
         else if (inputLength == 9)
         {
          tel.value += '-'
         }
    
  })
let max_life = 12
let life = max_life
document.querySelector(".schet-life").innerHTML = life
let chislo = Math.trunc(Math.random() * 100) + 1;
console.log("Ответ:", chislo);
let record_elem = document.querySelector(".schet-resultat")
let bt = document.querySelector(".proverka")
alert ("Играй внимательно и соблюдай все правила")


function record() {
   if(record_elem.innerHTML == "-"){
    record_elem.innerHTML = max_life - life + 1
   }
   else{
     if(record_elem.innerHTML > max_life - life){
        record_elem.innerHTML = max_life- life + 1
    }
    }

}

function gameover(){
    if (life <= -1){
        alert ("Конец")
        life= 10
    }
    let chislo = Math.trunc(Math.random() * 100) + 1;
    
}

function press(){
    document.querySelector(".schet-life").innerHTML = life
    function esli (){
        if (document.querySelector(".vvod").value <= 0
        ){ 
        bt.disabled = true
        alert ("Мы играем от 1 до 100, начни сначала)") 
        }
        else (document.querySelector(".vvod").value >= 100)
        {
        bt.disabled = true
        alert ("Мы играем от 1 до 100, начни сначала)") 
        }
    }
    if (document.querySelector(".vvod").value == chislo){ 
        esli()
        bt.disabled = true;
        alert (document.querySelector(".ggg").innerHTML) ;
        document.querySelector(".bolshe").innerHTML = "Вы молодец!";
        document.querySelector(".vopros").innerHTML = chislo
        record()
    } 
    else if (document.querySelector(".vvod").value  > chislo){
        esli()
        document.querySelector(".bolshe").innerHTML = "Загаданное число меньше"
        life--
        gameover()
        console.log("Жизней:", life)
    } else {
        esli()
        document.querySelector(".vvod").value < chislo
        document.querySelector(".bolshe").innerHTML = "Загаданное число больше"
        life--
        gameover()
        console.log("Жизней:", life)
    }
}

function op(){
    bt.disabled = false;
    life = max_life;
    document.querySelector(".schet-life").innerHTML = life + (max_life-life)
    chislo = Math.trunc(Math.random() * 100) + 1;
    console.log(chislo)
    document.querySelector(".vopros").innerHTML = "?"
    document.querySelector(".bolshe").innerHTML = "Загаданное число больше/меньше"
}

// function esli (){
//     if (document.querySelector(".vvod").value < 1
//     )
//     { bt.disabled = disabled
//         alert ("начни сначала"  )}
// }

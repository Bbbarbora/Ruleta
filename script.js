const cislo = Number(prompt('Zadaj cislo od 0 do 36'))

if (cislo ===0) {
    document.body.innerHTML += `<p> Cislo je 0, nie je ani cierne ani cervene. </p>`;
} else if (cislo > 36) {
    document.body.innerHTML += `<p class = "notvalid> Cislo nie je platne. Skus znovu :). </p>`;
} else if ((cislo >= 1 && cislo <= 10  || cislo >= 19 && cislo <= 28 ) && cislo % 2 === 0 ) {
    document.body.innerHTML += `<p class = "black" > Cislo je parne a cierne. </p>`;
} else if ((cislo >= 1 && cislo <= 10  || cislo >= 19 && cislo <= 28 ) && cislo % 2 !== 0 ) {
    document.body.innerHTML += `<p class = "red" > Cislo je neparne a cervene. </p>`;
} else if ((cislo >= 11 && cislo <19 || cislo > 28 && cislo <= 36) && cislo % 2 === 0) {
    document.body.innerHTML += `<p class = "red" > Cislo je parne a cervene. </p>`;
} else{
    document.body.innerHTML += `<p class = "black" > Cislo je neparne a cierne. </p>`;
}



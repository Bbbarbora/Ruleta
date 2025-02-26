const cislo = Number(prompt('Zadaj cislo od 0 do 36'))

if (cislo ===0) {
    document.body.innerHTMLv += `<p> Cislo je 0, nie je ani cierne ani cervene. </p>`;
} else if (cislo > 36) {
    document.body.innerHTML += `<p> Cislo nie je platne. Skus znovu :). </p>`;
} else if ((cislo >= 1 && cislo <= 10  || cislo >= 19 && cislo >= 28 ) && cislo % 2 === 0 ) {
    document.body.innerHTML += `<p> Cislo je parne a cierne. </p>`;
} else if ((cislo >= 1 && cislo <= 10  || cislo >= 19 && cislo >= 28 ) && cislo % 2 !== 0 ) {
    document.body.innerHTML += `<p> Cislo je neparne a cervene. </p>`;
} 



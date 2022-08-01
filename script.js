
var Username = prompt("Welcome to GC mini golf! What is your name?");

var Holesofgolf = prompt("Hi," + Username + "! Would you like to play 3 or 6 holes?");

let Totalputts = 0;
for (let i = 1; i <= Holesofgolf; i++) {
    let PuttCount = Number(prompt("How many putts for hole " + i + "? (par: 3)"));
    Totalputts += PuttCount;
}

if (Holesofgolf <= 3) {
    CoursePar = 9;
} else {
    CoursePar = 18;
}

let TotalPar = Totalputts -= CoursePar;

if (TotalPar == 0) {
    console.log("Good game, " + Username + ". Your total par was: " + TotalPar);
} else if (TotalPar > 0) {
    console.log("Nice try, " + Username + "... Your total par was: +" + TotalPar);
} else if (TotalPar < 0) {
    console.log("Great job, " + Username + "! Your par was: " + TotalPar);
}





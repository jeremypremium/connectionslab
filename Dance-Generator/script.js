let upperbody = [
    "shimmy", 
    "raise your right shoulder 6 times",
    "rotate your left shoulder 2 times slowly",
    "pull both your ears",
    "rub the right side of your head",
    "hold your left ear to your shoulder for 10 seconds",
    "roll your neck in each direction",
    "head bang",
    "stick your nose in the air",
    "stick out your tongue and yell"
]

let middlebody = [
    "rub your belly quickly for 15 seconds",
    "pop your chest 3 times",
    "wave virgorously",
    "windmill your hands",
    "jazz fingers",
    "pat yourself on the back",
    "extend your left arm",
    "bend over, smack your butt",
    "move through molasses",
    "Wakanda Forever",
    "wobble with it"


]

let lowerbody = [
   "shake your tailfeather",
   "sensually rub the back of your right knee",
   "bend your left knee and kick your own butt",
   "chair pose",
   "right leg: slow high kick",
   "slowly hop on your left leg",
   "stumble backward",
   "crouch down", 
   "take it back now y'all"
]


// Select elements
const button = document.querySelector("#button");
const output_upper = document.querySelector("#random-upperbody");
const output_middle = document.querySelector("#random-middlebody");
const output_lower = document.querySelector("#random-lowerbody");

// Attach an event listener 
button.addEventListener("click", () => { 
  output_upper.innerHTML = "Upper body instructions will show up here.";
  output_middle.innerHTML = "Middle body instructions will show up here.";
  output_lower.innerHTML = "Lower body instructions will show up here.";
});

function addText () {
  let randomUpper = Math.floor(Math.random() * upperbody.length);
  let randomMiddle = Math.floor(Math.random() * middlebody.length);
  let randomLower = Math.floor(Math.random() * lowerbody.length);
  
  output_upper.innerHTML = upperbody[randomUpper];
  output_middle.innerHTML = middlebody[randomMiddle];
  output_lower.innerHTML = lowerbody[randomLower];
}

button.addEventListener ("click", addText);

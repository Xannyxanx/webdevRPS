const gameContainer = document.querySelector(".container");
const user = document.querySelector(".user img");
const computer = document.querySelector(".computer img");
const result = document.querySelector(".result");
const choices_images = document.querySelectorAll(".choices_images");

choices_images.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("selected");

        user.src = computer.src = "rock.png"
        result.textContent = "Wait...";
        choices_images.forEach((image2, index2) => {
        index !== index2 && image2.classList.remove("selected");
    });

    gameContainer.classList.add("Start");


        let time = setTimeout(() => {
        
            let imageSrc = e.target.querySelector("img").src;
            user.src = imageSrc;
            gameContainer.classList.remove("Start");
    
            
            let computerChoice = Math.floor(Math.random() * 3);
            let cpuImages = ["rock.png", "paper.png", "scissors.png"];
            computer.src = cpuImages[computerChoice];
    1
            let cpuValue = ["Rock", "Paper", "Scissors"][computerChoice];
            let userValue = ["Rock", "Paper", "Scissors"][index];
            let outcomes = {
                PaperRock: "You win!",
                ScissorsRock: "You lose!",
                RockPaper: "You lose!",
                ScissorsPaper: "You win!",
                RockScissors: "You win!",
                PaperScissors: "You lose!",
                PaperPaper: "It's a tie!",
                RockRock: "It's a tie!",
                ScissorsScissors: "It's a tie!",
            };
            let outcomeValue = outcomes[userValue + cpuValue];
    
            result.textContent = userValue === cpuValue ? "It's a tie!" : `${outcomeValue}`;
            console.log(outcomeValue);
        
        }, 2500);


    });
});
const submitBtn = document.getElementById("submit");
        const rockHTML = document.getElementById("rockSelector");
        const paperHTML = document.getElementById("paperSelector");
        const scissorsHTML = document.getElementById("scissorsSelector");
        const aga2HTML = document.getElementById("aga2");
        const conclusionHTML = document.getElementById("conclusion");

        function userWeaponChoice(){
            if (rockHTML.checked){
                return "rock";
            }
            else if (paperHTML.checked){
                return "paper";
            }
            else if(scissorsHTML.checked){
                return "scissors";
            }
            else{
                return null;
            }
        }

        function pcChoice() {
            let pc = Math.floor(Math.random() * 3 + 1);
            if(pc === 1){
                return "rock";
            }
            else if(pc === 2){
                return "paper";
            }
            else if(pc === 3){
                return "scissors";
            }
        }

        function win(userWeapon, pc){
            // Rock
            if(userWeapon === "rock" && pc === "rock"){
                return "It's a draw!";
            }
            else if(userWeapon === "rock" && pc === "paper"){
                return "You lost!";
            }
            else if(userWeapon === "rock" && pc === "scissors"){
                return "You won!";
            }

            // Paper
            if(userWeapon === "paper" && pc === "rock"){
                return "You won!";
            }
            else if(userWeapon === "paper" && pc === "paper"){
                return "It's a draw!";
            }
            else if(userWeapon === "paper" && pc === "scissors"){
                return "You lost!";
            }

            // Scissors
            if(userWeapon === "scissors" && pc === "rock"){
                return "You lost!";
            }
            else if(userWeapon === "scissors" && pc === "paper"){
                return "You won!";
            }
            else if(userWeapon === "scissors" && pc === "scissors"){
                return "It's a draw!";
            }
        }

        function stringToEmoji(pc){
            if(pc === "rock"){
                return '🪨';
            }
            else if(pc === "paper"){
                return "📃";
            }
            else if(pc === "scissors"){
                return "✂️";
            }
        }

        function resultToColor(result){
            if(result === "You lost!"){
                return '#c4251a';
            }
            else if(result === "You won!"){
                return "#26c41d";
            }
            else if(result === "It's a draw!"){
                return "#707070";
            }
        }

        submitBtn.addEventListener('click', () => {
            let pc = pcChoice();
            let result = win(userWeaponChoice(), pc);
            let color = resultToColor(result);

            aga2HTML.innerText = 'The AI choice is ' + stringToEmoji(pc);
            conclusionHTML.innerText = result;
            conclusionHTML.style.opacity = '100%';
            conclusionHTML.style.color = color;
        });
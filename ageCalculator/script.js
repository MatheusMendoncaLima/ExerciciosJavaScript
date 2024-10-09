
        const INPUT = document.getElementById("birthdate");
        const AGE = document.getElementById("age");
        const CURRENT_DATE = new Date();
        
        current_year = parseInt(CURRENT_DATE.getFullYear());
        current_month = parseInt(CURRENT_DATE.getMonth()) + 1;
        current_day = parseInt(CURRENT_DATE.getDate());


        INPUT.addEventListener("input", (event) => {
            target = event.target;
            date= target.value.split("-");
            year = parseInt(date[0]);
            month = parseInt(date[1]);
            day = parseInt(date[2]);

            if(verifyIfAfter(day, month, year, current_day, current_month, current_year)){
                AGE.innerHTML = "Insira uma data válida";
                return;
            }
            age = current_year-year;
            if(verifyIfAfter(day, month, 0, current_day, current_month, 0)){
                age--;
            }
            plural="s"
            if(age <= 1){
                plural = "";
            }

            AGE.innerHTML = "Você tem "+ age +" ano" + plural;
            
        }) 
        function verifyIfAfter(d1, m1, y1, d2, m2, y2){

            if(y1 > y2 || (y1 == y2 && m1 > m2) || (y1 == y2 && m1 == m2 && d1 > d2)){
                return true;
            }
            return false;

        }

        const submit = document.getElementById('srt');  
        const clear = document.getElementById('clear');           
        submit.addEventListener('click',() => {  
        let isAnyEmpty = false;
        const inptvals=document.querySelectorAll('.inputs'); 
        inptvals.forEach(input => {
            if (input.value === '' || isNaN(parseFloat(input.value))) {
                isAnyEmpty = true;
                input.style.border='2px solid red';
            }
        });

        if (isAnyEmpty) {
             document.getElementById('srtsubj').textContent = 'Please fill out all fields with valid numbers!';
            return; 
        }
            setTimeout(function() {
            window.location.href = 'LoadingBest5Animation.html';
            }, 1);
            let isanyblank=false
            const inputs=document.querySelectorAll('.inputs');                
            const s1 = parseFloat(document.getElementById('s1').value);                 
            const s2 = parseFloat(document.getElementById('s2').value);                 
            const s3 = parseFloat(document.getElementById('s3').value);                 
            const s4 = parseFloat(document.getElementById('s4').value);                 
            const s5 = parseFloat(document.getElementById('s5').value);                 
            const s6 = parseFloat(document.getElementById('s6').value);                 
            const s7 = parseFloat(document.getElementById('s7').value);                 
            const s8 = parseFloat(document.getElementById('s8').value);                 
            const s9 = parseFloat(document.getElementById('s9').value);                 
            const s10 = parseFloat(document.getElementById('s10').value);  
            var s12 = Math.floor((s1 + s2) / 2.0);          
            let othersubjects = [s3, s4, s5, s6, s7, s8, s9, s10];                 
            othersubjects.sort((a, b) => b - a);                 
            const topFourSubjects = othersubjects.slice(0, 4);                 
            let bstfve = [s12, ...topFourSubjects];         
            localStorage.setItem('bestFiveMarks', JSON.stringify(bstfve));  
            const sum = bstfve.reduce((accumulator, currentValue) => accumulator + currentValue);                 
            const percen = (sum / 500.0) * 100;     
            localStorage.setItem('percentage', percen);
        });  
        clear.onclick=function(){
            inputs.forEach(input => {
                input.value='';
                input.textContent='';
            });
        };
        document.addEventListener('keydown',(event1) => {
                if(event1.ctrlKey && event1.key === 'Enter')
                {
                submit.click();
                }
                });
        document.addEventListener('keydown',(event2) =>{
            if(event2.ctrlKey && event2.key === 'Delete')
            {
                clear.click();
            }
        })
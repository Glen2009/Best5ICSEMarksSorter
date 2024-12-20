const Best5SubjectMarks = JSON.parse(localStorage.getItem('bestFiveMarks'));
const SubjectPercentage = parseFloat(localStorage.getItem('percentage'));
if (Best5SubjectMarks && SubjectPercentage) {
    document.getElementById('Best5displayed').textContent = `Best 5 Marks: ${Best5SubjectMarks.join(', ')}`;
    document.getElementById('PercentDISP').textContent = `Percentage: ${SubjectPercentage.toFixed(2)}%`;
} else {
    document.getElementById('Best5displayed').textContent = "No results found.";
    document.getElementById('PercentDISP').textContent = "";
}

const Backbtn = document.getElementById('back');
Backbtn.addEventListener('click', () => {
    window.location.href = "PercentgaeBest5SORTER.html";
});

window.addEventListener('beforeunload', () => {
    document.getElementById('Best5displayed').textContent = '';
    document.getElementById('PercentDISP').textContent = '';
});

document.addEventListener('keydown',(event) => {
                if(event.key === 'Delete' && event.ctrlKey){
                Backbtn.click();
            }
            })  
document.addEventListener('keydown',(event) => {
if(event.key === 'Backspace' && event.ctrlKey){
Backbtn.click();
            } 
            })  
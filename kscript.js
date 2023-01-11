const score=document.getElementById("score");
const kangaroo=document.getElementById("kangaroo");
const rock=document.getElementById("rock");


function hopping(){
    kangaroo.classList.add("hopping");
    setTimeout(() => {
        kangaroo.classList.remove("hopping")},400);

    }
    document.addEventListener("keydown",()=>{
        if(!kangaroo.classList.contains("hopping"))
        {
            hopping();
        }
    });
    setInterval(()=>{
        score.innerText++;
        const kangtop=parseInt(window.getComputedStyle(kangaroo).getPropertyValue('top'));
        const rockleft=parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
        if(rockleft<0)
        {
            rock.style.display="none";
        }
        else{
            rock.style.display="";
        }
        if(rockleft>0&&rockleft<50 && kangtop>175)
        {
            alert("Your Score: " + score.innerText+ "\n\n New Game?");
            location.reload();
         }
    },50);

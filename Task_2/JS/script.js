const ball=document.querySelector(".ball");
const left_goal=document.querySelector("#leftGoal");
const right_goal=document.querySelector("#rightGoal");
ball.style.left="360px";
ball.style.top="260px"



ball.addEventListener("mousedown",onBallTouched)
function processBallMove(e)
{
    ball.style.left=e.clientX-25+"px";
    ball.style.top=e.clientY-25+"px";
    if(e.clientX<=30&&(e.clientY>190&&e.clientY<380))
    {
        goal();
        left_goal.innerHTML=parseInt(left_goal.innerHTML)+1;
    }
    if(e.clientX>=730&&(e.clientY>190&&e.clientY<380))
    {
        goal();
        right_goal.innerHTML=parseInt(right_goal.innerHTML)+1;
    }
}
function goal()
{
    ball.removeEventListener("dragstart",processBallMove);
    ball.removeEventListener("drag",processBallMove);
    ball.removeEventListener("dragend",processBallMove);
    ball.style.left="360px";
    ball.style.top="260px";
}

function onBallTouched()
{
    ball.addEventListener("dragstart",processBallMove);
    ball.addEventListener("drag",processBallMove);
    ball.addEventListener("dragend",processBallMove);

}
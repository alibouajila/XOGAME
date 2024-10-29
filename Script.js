let title=document.querySelector(".title");
let turn ="x"
let squars=[];
let ca=true
let x=0;
function win(a,b,c){
    document.getElementById('s'+a).style.background="black"
    document.getElementById('s'+b).style.background="black"
    document.getElementById('s'+c).style.background="black"
    title.innerHTML=squars[a]+' is the winner !'
    setInterval(()=>{title.innerHTML+="."},1000)
    setTimeout(()=>{location.reload()},2800)
    ca=false
    for(i=1;i<10;i++){
        document.getElementById("s"+i).style.cursor="not-allowed"
    }
}


function winner(){
    for(let i=1;i<10;i++){
        squars[i]=document.getElementById('s'+i).innerHTML;
    }
        if(squars[1]==squars[2]&&squars[1]==squars[3]&& squars[3]!=""){
        win(1,2,3)
        }else if(squars[4]==squars[5]&&squars[6]==squars[5]&& squars[5]!=""){
        win(4,5,6)
        }else if(squars[7]==squars[8]&&squars[8]==squars[9]&& squars[7]!=""){
        win(7,8,9)
        }else if(squars[1]==squars[4]&&squars[4]==squars[7]&& squars[4]!=""){
        win(1,4,7)
        }else if(squars[2]==squars[5]&&squars[8]==squars[5]&& squars[2]!=""){
        win(2,5,8)
        }else if(squars[3]==squars[6]&&squars[6]==squars[9]&& squars[6]!=""){
        win(3,6,9)
        }else if(squars[1]==squars[5]&&squars[9]==squars[5]&& squars[5]!=""){
        win(1,5,9)
        }else  if(squars[3]==squars[5]&&squars[7]==squars[3]&& squars[3]!=""){
        win(3,5,7)        }
    }

function game (id){
if (ca==true){
    let element=document.getElementById(id);
    if (turn==="x"&&element.innerHTML===""){
        x++
        element.innerHTML="X"
        turn="o"
        title.innerHTML="O turn !"
        winner()
    }else if(turn==="o"&& element.innerHTML===""){
        x++
        element.innerHTML="O"
        turn="x"
        title.innerHTML="X turn !"    
        winner()


    }
    if(x==9&&ca){
        title.innerHTML="Withdraw !"
        ca=false
        setInterval(()=>{title.innerHTML+="."},1000)
        setTimeout(()=>{location.reload()},4000)
        for(i=1;i<10;i++){
        document.getElementById("s"+i).style.cursor="not-allowed"
    }
    }
}
}

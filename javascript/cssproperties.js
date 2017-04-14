/**
 * Created by milic on 2.1.2017..
 */

window.addEventListener("load",resizeHeader());
function resizeHeader(){
    var sirina=document.getElementById("pgheader").clientWidth;


    var sirinat=document.getElementById("pgtitle");
    var wdt=sirinat.clientWidth;
    var calc= (sirina/2);
    sirinat.style.left=(calc- (wdt/2))+"px";

}

window.onload=start();
function start(){
    tourJson();

}



function tourJson(){
    var ajax= new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(this.readyState==4&& this.status==200){
            console.log(JSON.parse(this.responseText));
            var tourJSON=JSON.parse(this.responseText);

            var tabela=document.getElementById("tourDate");
            for(var i=0;i<tourJSON.length;i++){

               var row=document.createElement("tr");


               datum=document.createElement("td");
               datum.innerHTML=tourJSON[i].date;
                row.append(datum);
                mesto=document.createElement("td");
                mesto.innerHTML=tourJSON[i].venue;
                row.append(mesto);
                zemlja=document.createElement("td");
                zemlja.innerHTML=tourJSON[i].location;
                row.append(zemlja);
                link=document.createElement("a");
                link.href=tourJSON[i].tickets;
                link.innerHTML="TICKETS";
                link.className="kupiKartu";
                link.target="_blank";
                karta=document.createElement("td");
                karta.append(link);
                row.append(karta);
                tabela.appendChild(row);
            }

        }
    };
    ajax.open('GET','data/tour.json',true); //true da je asinhrona
    ajax.send();


}
function check(){

    var polje=document.getElementById("mailInput");
    var poruka=polje.value;
    var greska=document.getElementById("errorMsg");
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(poruka==""){
        greska.innerHTML="You must fill input first!";
        greska.style.visibility="visible";
        polje.style.borderColor="red";
    }
    else if(pattern.test(poruka)){
        alert("You sign up successfully");
        polje.value="";
        greska.visibility="hidden";
        polje.style.borderColor="gray";
    }
    else{
        greska.innerHTML="Please, enter valid format for this input";
        greska.style.visibility="visible";
        polje.style.borderColor="red";
        polje.value="";
    }

}


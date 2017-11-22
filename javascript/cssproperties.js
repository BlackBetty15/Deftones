/**
 * Created by milic on 2.1.2017..
 */

window.addEventListener("load",resizeHeader());
function resizeHeader(){
    var pgWidth=document.getElementById("pgheader").clientWidth;


    var titleWidth=document.getElementById("pgtitle");
    var wdt=titleWidth.clientWidth;
    var calc= (pgWidth/2);
    titleWidth.style.left=(calc- (wdt/2))+"px";

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

            var table=document.getElementById("tourDate");
            for(var i=0;i<tourJSON.length;i++){

               var row=document.createElement("tr");


               dateInfo=document.createElement("td");
               dateInfo.innerHTML=tourJSON[i].date;
                row.append(dateInfo);
                venue=document.createElement("td");
                venue.innerHTML=tourJSON[i].venue;
                row.append(venue);
                country=document.createElement("td");
                country.innerHTML=tourJSON[i].location;
                row.append(country);
                link=document.createElement("a");
                link.href=tourJSON[i].tickets;
                link.innerHTML="TICKETS";
                link.className="buyTicket";
                link.target="_blank";
                ticket=document.createElement("td");
                ticket.append(link);
                row.append(ticket);
                table.appendChild(row);
            }

        }
    };
    ajax.open('GET','data/tour.json',true); //true da je asinhrona
    ajax.send();


}
function check(){

    var inputPlace=document.getElementById("smallInput");
    var message=inputPlace.value;
    var error=document.getElementById("errorMsg");
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(message==""){
        error.innerHTML="You must fill input first!";
        error.style.visibility="visible";
        inputPlace.style.borderColor="red";
    }
    else if(pattern.test(message)){
        alert("You sign up successfully");
        inputPlace.value="";
        error.visibility="hidden";
        inputPlace.style.borderColor="gray";
    }
    else{
        error.innerHTML="Please, enter valid format for this input";
        error.style.visibility="visible";
        inputPlace.style.borderColor="red";
        inputPlace.value="";
    }

}






function ajax(){

    //creating a xhr object
    var xhttp = new XMLHttpRequest();
    // onreadystatechange property that defines a function to be executed when the readystate changes
    
    //EventListener
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState == 4 && this.status == 200){
    
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var list =response.list;
            console.log(list);
            var output = "";
            for(var i=0;i<list.length;i++){
                //jeslin gokul and sandeep will be appended and not replaced
                output += `<tr>
                <td>${list[i].SerialNo}</td>
                <td>${list[i].Name}</td>
                <td>${list[i].Quantity}</td>
                <td>${list[i].Unit}</td>
                <td>${list[i].Dept}</td>
                <td>${list[i].Notes}</td>
                </tr>`
            }
            //console.log(output);
            document.getElementById("body").innerHTML = output;
        }
    }
    
    xhttp.open("GET","list.json",true);
    
    xhttp.send();
    
    }
    
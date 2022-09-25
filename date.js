var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    
    if (hour < 12) {  
      welcome = "Good morning";  
    } else if (hour < 17) {  
      welcome = "Good afternoon";  
    } else if (hour < 21) {  
      welcome = "Good evening";  
    }  
    else{
      welcome = "Good Night"
    }
    document.getElementById('time').innerHTML ="Hello "+ welcome +" "+hour + ":" + minute + ":" + second;
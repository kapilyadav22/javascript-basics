var status = "🌱";

setTimeout(()=>{
    const status = "🍄";

    const data = {
        status : "⭐",
        getStatus() {
            return this.status;
        }
    };


    console.log(data.getStatus());  //⭐
    console.log(data.getStatus.call(this)); //🌱


    //this never points to a function and settimeout is a function, so this will refer to global status
    
    
},0);
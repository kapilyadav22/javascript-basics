
const settings = {
username: "Kapil", level: 19, health: 90,
};

const data = JSON. stringify(settings, ["level", "health"]) ;
console.log(data); 


//OUTPUT : It will only stringfy level and health
// {"level": 19, "health": 90}

const value = { number: 10 };

//{...value} means cloned the value, x={defaultvalue}
const multiply = (x = {...value }) => {
    console.log((x.number *= 2));
};

multiply(); //20
multiply(); //20
multiply(value); //20
multiply(value); //40
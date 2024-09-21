// call apply bind
//call apply bind methods are used to use function in an object.

// ! call
// syntax:functionname.Call(objectName ,parameters);
// ! Aplly
// syntax:functionname.Apply(objectName ,[parameters]);
// ! Bind
// syntax:functionname.Bind(objectName ,parameters)();

// case 1
/*let Anduman={
sname:"Anduman",
course:"python full stack",
greet:function(){
    return "hi! hello how are you?....";
}
};
console.log(Anduman)
console.log(Anduman.sname);
console.log(Anduman.course);
console.log(Anduman.greet());

let pranjal={
        sname:"pranjal",
        course:"java full stack",
    }; 
    console.log(Anduman.greet.call(pranjal));

*/


// case 2-using string interpolation

let Anduman={
    sname:"Anduman",
    course:"python full stack",
    printname:function(){
        return `hi! hello ${this.sname} how are you?....`;
    }
    };
    let swati={
        sname:"swati",
        course:"java full stack",
    }
    console.log(Anduman.printname.call(swati));
    
    // case:3 - to add more parameters




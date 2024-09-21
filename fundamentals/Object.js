//destructure an object

// const course = {
//     coursename: "Javascript",
//     price: "999",
//     courseinstructor: "bobby sir"
// }

// //  course.courseinstructor    (to avoid writting the same code again and again we use  object destructure )

// const{courseinstructor:instructor}=course

// //console.log(instructor);
// console.log(courseinstructor);
const user={
    firstname:`abhay`,
    lastname:`singh`,
    age:21,
    education:'post-graduate',
    city:'kanpur',
    address:{  //we can create a object inside an object
        city:'delhi',
        pincode:208020,
        state:'Delhi',
    }
};
console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
console.log(user.education);
console.log(user.city);



const user2={
    firstname:'abhishek',
    lastname:'singh',
    age:25,
    education:'graduate',
    city:'kanpur'
};
//dot notation
console.log(user2.firstname);
console.log(user2.lastname);
console.log(user2.age);
console.log(user2.education);
console.log(user2.city);

// fetch data with bracket notation
console.log(user2["firstname"]);
console.log(user2["age"]);
console.log(user2["first"+"name"]);//expression




import React from "react";


const students =[
    {
    name:"kingsley",
    age: 50,
    hobbies:["singing", "dancing"]
    },
    
    {
    name:"emeka",
    age: 28,
    hobbies:"eating"
    },

{
name:"chinedu",
age: 42,
hobbies:"playing"
},

{
name:"chima",
age: 22,
hobbies:"running"
},

{
name:"nkem",
age: 34,
hobbies:"coding"
},
];

function findStudent(student){
const nameValue = student.map((value)=>{
return value.name;
})

const ageValue = student.map((value)=>{
return value.age;
})

const hobbiesValue = student.map((value)=>{
return value.hobbies;
})

for(let i = 0; i<student.length; i++) {

console.log(`Name: ${nameValue[i]} Age: ${ageValue[i]} Hobbies: ${hobbiesValue[i]} `);

}

}


class StudentArray extends React.Component{
    render(){
          return <div>
         <h1>Console App{findStudent(students)} </h1>
         <h4>This app console logs all names of students there is. ctrnl shift + i on windows to view</h4>
         </div> 
    }
}

export default StudentArray;
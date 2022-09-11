'use strict';


//-----------------------Условие
const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]
//calculateStudentAverageMark(students[2]);
//calculateGroupAverageMark(students);

//Написать две функции:

//calculateStudentAverageMark - выведет средний бал студента, который передан в аргументе

//calculateGroupAverageMark - выведет средний бал по всем студентам, переданным в аргументе

//Решение

 const calculateStudent = calculateStudentAverageMark(students[2].marks,students[2].marks.length);
 const calculateGroup = calculateGroupAverageMark(students[0].marks,students[1].marks,students[2].marks,students[3].marks);


function calculateStudentAverageMark(items,length){
let summArr;
return summArr = items.reduce((sum,item)=>sum + item,0)/ length;
}
alert('This students grade point average is-' + calculateStudent);



function calculateGroupAverageMark(studentOne,studentTwo,studentThree,studentFour){

let concatAllArray;
concatAllArray = studentOne.concat(studentTwo,studentThree,studentFour);
return concatAllArray.reduce((sum,item)=>sum+item,0)/concatAllArray.length;
}
alert('This groupe grade point average is-' + calculateGroup);
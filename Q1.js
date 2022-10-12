// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene
function typeOfTriangle(a,b,c){
    if(a==b && b==c && c==a){
        console.log("Equilateral Triangle");
    }
    else if(a==b || b==c || c==a){
        console.log("Isosceles Triangle");
    }
    else if(a!=b && b!=c && c!=a){
        console.log("Scalene Triangle");
    }
}

let equi=typeOfTriangle(3,3,3);
let iso=typeOfTriangle(3,2,2);
let sca=typeOfTriangle(1,2,3);
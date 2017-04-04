var array = [
    {title:"Pick up drycleaning", id:1},
    {title: "Clean Batcave",  id:2},
    {title: "Save Gotham",id:3}
];

console.table(array);

for(var i in array){
    for(var obj in array[i]){
         console.log(array[i][obj]);
    } 
}

for(var value of array){
    console.log(value.title,"value");
}






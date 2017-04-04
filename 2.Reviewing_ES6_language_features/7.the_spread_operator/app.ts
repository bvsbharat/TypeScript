function add() {

    var numberlist = [{ b: "test" }, { c: "test2" }];
    var obj1 = [{ a: "test" }, ...numberlist];
    console.log(numberlist);
}

add();

function name() {
    var a = "Shadya";
    var b = "Pamera";

    function identity() {
        var c = a + " and " + b + " are friends";
        console.log(c)
    }
    identity();
    console.log(a, b);
}
name();
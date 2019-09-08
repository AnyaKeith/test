function previewFile() {
    var preview = document.querySelector(".good");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    reader.addEventListener(
        "load",
        function() {
            preview.style.backgroundImage = `url(${reader.result})`;
            preview.style.backgroundPosition = "center";
            preview.style.backgroundRepeat = "no-repeat";
            preview.style.backgroundSize = "cover";
        },
        false
    );

    if (file) {
        reader.readAsDataURL(file);
    }
}

// var
// let & const
// const name = "Ihar";
// console.log(name);
// debugger;
// name = "Anya";
// console.log(name);

alert('Hello, Anya!');
console.log('Hey! I am in console!');
prompt("What is your name?", "Ihar")
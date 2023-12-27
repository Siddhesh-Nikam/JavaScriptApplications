function chai(){
    console.log("DB Connected for chai");
}

chai();

(function chai(){
    console.log("DB Connected for chai");
})();

(  (name) => {
    console.log(`DB Connected for chai2 ${name}`);
}) ('Siddhesh')

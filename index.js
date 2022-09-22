function submitForm(){
    const name = document.querySelector('input[name="inputname"]').value;
    const category = document.querySelector('input[name="inputcategory"]').value;
    const price = document.querySelector('input[name="inputprice"]').value;
    const description = document.querySelector('input[name="inputdescription"]').value;

    const record = {
        name: validateText(name, 3, 20) ? name.trim() : false,
        category: validateText(category, 10, 20) ? category.trim() : false,
        price: validatePrice(price) ? '$'+parseFloat(price).toFixed(2) : false,
        description: validateText(description, 15, 256) ? description.trim() : false,
        date: new Date()
    };

    console.log("record: ", record);

}

function validateText(text, min, max){
    if(text.trim().length > min && text.trim().length < max){
        return true;
    }
    return false;
}

function validatePrice(num1){
    const num = parseFloat(num1);
    if(!isNaN(num) && num > 0){
        return true;
    }
    return false;
}

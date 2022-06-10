const isOK = (data) => {
    return (data!==undefined && data!=null && data.length!==0);
}

const isUserName = (value) => {
    var reAlpha = new RegExp("^([0-9]*)?[a-zA-Z]+[0-9]*$");
    return reAlpha.test(value);
}

const isString = (value) => {
    var reString = new RegExp("^[A-Za-z]+$");
    return reString.test(value);
}

const isNumeric = (value) => {
    reInt = new RegExp("^(-?[0-9]+)$");
    return reInt.test(value);
}

const isValidPassword = (password) => {
    var rePassw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return password.length>5 && rePassw.test(password);
}

module.exports = {isOK, isUserName, isString, isNumeric, isValidPassword};


exports.setLSuserId = (item) => {
    localStorage.setItem('userId', item)
}
exports.getLSuserId = () => {
    return localStorage.getItem('userId')
}
exports.setLSloggedIn = (item) => {
    localStorage.setItem('loggedIn', item)
}
exports.getLSloggedIn = () => {
    return localStorage.getItem('loggedIn')
}

exports.setLSisServiceProvider = (item) => {
    localStorage.setItem('isServiceProvider', item)
}

exports.getLSisServiceProvider = () => {
    return localStorage.getItem('isServiceProvider')
}
exports.getLSuserDetails = () => {
    return localStorage.getItem('userDetails')
}
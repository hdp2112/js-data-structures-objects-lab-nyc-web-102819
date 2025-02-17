// Write your solution in this file!

const driver = {
    name: 'Sam',
    address: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let drivers = { driver };
    delete drivers[key];
    return drivers;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
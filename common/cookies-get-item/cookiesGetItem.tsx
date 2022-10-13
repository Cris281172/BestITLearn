interface cookieGetItemI{
    name: string,
}

const cookiesGetItem = (name: cookieGetItemI) => {
    const partsOfCookies = document.cookie.split(`;`);
    const test = partsOfCookies.filter(el => {
        return el === ' language=de'
    })
    console.log(test)
    if(test[0] === undefined){
        return
    }
    const indexOfSearchValue = test[0].indexOf('=', 0);
    return test[0].slice(indexOfSearchValue + 1)
}

export default cookiesGetItem;
const cookiesGetItem = (name: string) => {
    const partsOfCookies = document.cookie.split(`;`);
    const arrayWithCookieValue = partsOfCookies.filter(el => {
        const indexOfequal = el.indexOf('=')
        const cookieName = el.slice(0, indexOfequal)
        return cookieName.replace(/\s/g, "") === name;
    })

    if(arrayWithCookieValue[0] === undefined){
        return
    }
    const indexOfSearchValue = arrayWithCookieValue[0].indexOf('=', 0);
    return arrayWithCookieValue[0].slice(indexOfSearchValue + 1)
}

export default cookiesGetItem;
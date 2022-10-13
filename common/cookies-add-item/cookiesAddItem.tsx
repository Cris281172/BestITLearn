interface cookiesAddItemI{
    name: string,
    value: string,
    path: string,
    expires: number
}

const cookiesAddItem = ({name, value, path, expires}: cookiesAddItemI) => {
    document.cookie = `${name}=${value}; Max-Age=${expires}; path=${path}`;
}
export default cookiesAddItem;
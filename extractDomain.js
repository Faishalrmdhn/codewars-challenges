function domainName(url) {
    url = url.replace(/^(https?:\/\/)?(www\.)?/, '')
    let value = url.split('.')[0]
    return value

}

console.log(domainName("https://youtube.com"))
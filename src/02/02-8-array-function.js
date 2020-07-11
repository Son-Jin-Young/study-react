function parse(qs) {
    var queryString = qs.substr(1);
    var chunks = queryString.split('&');
    var result = {};

    // 기존 자바스크립트 배열
    // for (var i = 0; i < chunks.length; i++) {
    //     var parts = chunks[i].split('=');
    //     var key = parts[0];
    //     var value = isNaN(parts[1]) ? parts[1] : Number(parts[1]);
    //     result[key] = value;
    // }

    // ES6 forEach
    // chunks.forEach((query) => {
    //     var [key, value] = query.split('=');
    //     result[key] = value;
    // });

    // ES6 map
    // result = chunks.map((query) => {
    //     var [key, value] = query.split('=');
    //     return {key, value};
    // });

    // ES6 reduce
    // result = chunks.reduce((res, query) => {
    //     var [key, value] = query.split('=');
    //     res[key] = value;
    //     return res;
    // }, result);

    // return result;

    // ES6 map & reduce
    return chunks.map((query) => {
        var [key, value] = query.split('=');
        return {key, value};
    }).reduce((result, item) => {
        result[item.key] = item.value;
        return result;
    }, {});
}

console.log(parse('?banana=10&apple=20&orange=30'));
export const isCustomPageUri = (uri) => {

    const pagesToExclude = [
        '/events/',
        
    ];

    return pagesToExclude.includes(uri)
}

function parsePartCode(code) {
    let product = {};
    let colon;
    let dash
    function getSupplier(code) {
        colon = code.indexOf(":");
        product.supplierCode = code.substring(0, colon).toUpperCase();
        // console.log(supplierCode)
        // return supplierCode;
    }
    function getProductNumber(code) {
        colon = code.indexOf(":");
        dash = code.indexOf("-");
        product.productNumber = code.substring(colon + 1, dash);
        // return productNumber; 
        // console.log(productNumber)
    }
    function getSize(code) {
        dash = code.indexOf("-");
        sizeStr = code.substring(dash + 1);
        // return size;
        product.size = sizeStr.toUpperCase();


    }

    getSupplier(code);

    getProductNumber(code);
    getSize(code);
    return product

}

let part1 = parsePartCode("xyz:1234-m");
console.log(part1);
console.log(`supplier: ${part1.supplierCode} productNumber: ${part1.productNumber} productsize: ${part1.size}`)
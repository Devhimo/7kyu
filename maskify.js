// return masked string

function maskify(cc) {
  
    if (cc.length <= 4) {
        return cc
        
    }

    let maskSection  = "#".repeat(cc.length-4)
    let lastFour =cc.slice(-4)
  
    return maskSection + lastFour
}
console.log(maskify("123456789"));
 
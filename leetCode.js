var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

function findPath(object, keys){
    let obj2
    let keysSplit = keys.split('.')
    let last;
    for(var i = 0; i < keysSplit.length;i++ ){
        if(object && object.hasOwnProperty(`${keysSplit[i]}`)){
            object = object[`${keysSplit[i]}`]
        }
        else {
            object = undefined
        }
       
    }
    console.log('Result:::', object)
 }

findPath(obj, 'a.j.k')

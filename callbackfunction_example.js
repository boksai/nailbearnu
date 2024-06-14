function first(name,callback){
    setTimeout(()=>{
        console.log(`${name} is mine`)
        callback()
    },500)
   
}

function second(){
    console.log(`Second function`)
}

first('david',second)
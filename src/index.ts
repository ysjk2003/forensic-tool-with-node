import * as fs from "fs"

const FIlE_LOCATION = "../Datas/ex01.vhd"

fs.readFile(FIlE_LOCATION, 'utf8', function(err, fileData) {
    if (err) throw err
    console.log(fileData)
})
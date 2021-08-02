import * as fs from "fs"
import viewSector from "./hex-viewer"

const FIlE_LOCATION = "./data/ex01.vhd"

function openFile(fileLocation: string) {
    try {
        return fs.readFileSync(fileLocation)
    } catch (err) {
        console.log("Can not open file:", fileLocation)
        return Buffer.from("")
    }
}

function main() {
    const file: Buffer = openFile(FIlE_LOCATION)
    viewSector(file, 0)
}

main()

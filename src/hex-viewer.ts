function fillZero(width: number, str: string) {
    return str.length >= width ? str : new Array(width - str.length + 1).join("0") + str
}

export const SECTOR_SIZE = 512

export default function viewSector(mbrData: Buffer, sector: number): void {
    process.stdout.write("HEXEDIT  ")
    for (let i = 1; i < 16; i++) {
        process.stdout.write(fillZero(2, i.toString(16)) + " ")
    }
    process.stdout.write("\n")

    console.log("=".repeat(60))

    for (let i = sector * SECTOR_SIZE; i < sector * SECTOR_SIZE + SECTOR_SIZE; i += 16) {
        console.log(
            fillZero(8, (SECTOR_SIZE * sector + i * 16).toString(16).toUpperCase()),
            ...mbrData
                .slice(i, i + 16)
                .toJSON()
                .data.map((value) => fillZero(2, value.toString(16).toLocaleUpperCase())),
        )
    }
}

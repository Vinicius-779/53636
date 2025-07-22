
//% weight=100 color=#00AEEF icon="" block="TCS34725MUX"
namespace TCS34725MUX {

    let i2cAddr = 0x29

    function writeRegister(reg: number, value: number) {
        pins.i2cWriteNumber(i2cAddr, (0x80 | reg) << 8 | value, NumberFormat.UInt16BE)
    }

    function readRegister(reg: number): number {
        pins.i2cWriteNumber(i2cAddr, 0x80 | reg, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(i2cAddr, NumberFormat.UInt8BE)
    }

    function selectChannel(channel: number) {
        pins.i2cWriteNumber(0x70, 1 << channel, NumberFormat.UInt8BE)
    }

    //% block="Selecionar canal do MUX %channel"
    //% channel.min=0 channel.max=7
    export function selecionarCanal(channel: number) {
        selectChannel(channel)
    }

    //% block="Iniciar sensor TCS34725"
    export function iniciarSensor() {
        writeRegister(0x00, 0x03)
        basic.pause(10)
    }

    //% block="Ler valor de cor vermelha"
    export function lerVermelho(): number {
        return readRegister(0x16) | (readRegister(0x17) << 8)
    }

    //% block="Ler valor de cor verde"
    export function lerVerde(): number {
        return readRegister(0x18) | (readRegister(0x19) << 8)
    }

    //% block="Ler valor de cor azul"
    export function lerAzul(): number {
        return readRegister(0x1A) | (readRegister(0x1B) << 8)
    }

    //% block="Ler valor de claro (clear)"
    export function lerClaro(): number {
        return readRegister(0x14) | (readRegister(0x15) << 8)
    }
}

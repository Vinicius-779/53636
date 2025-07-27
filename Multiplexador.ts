//% color=#AA00FF weight=100 icon="" block="TCA9548A"
namespace TCA9548A {

    /**
     * Bloco COM SELECIONAR: menu suspenso de 0 a 7
     */
    //% block="Selecionar porta do TCA9548A %porta"
    //% porta.defl=0
    //% porta.min=0 porta.max=7
    export function selecionarPortaDropdown(porta: number): void {
        let valor = 1 << porta
        pins.i2cWriteNumber(0x70, valor, NumberFormat.UInt8BE)
        basic.pause(10)
    }

    /**
     * Bloco COM SLOT para variável ou número
     */
    //% block="Selecionar porta do TCA9548A (variável) %porta"
    //% porta.shadow="number"
    export function selecionarPortaVariavel(porta: number): void {
        let valor = 1 << porta
        pins.i2cWriteNumber(0x70, valor, NumberFormat.UInt8BE)
        basic.pause(10)
    }

    /**
     * Desativar todas as portas
     */
    //% block="Desativar todas as portas do TCA9548A"
    export function desativarTudo(): void {
        pins.i2cWriteNumber(0x70, 0x00, NumberFormat.UInt8BE)
        basic.pause(10)
    }
}

//% weight=100 color=#00AEEF icon="" block="Multiplexador"
namespace Multiplexador {

    let enderecoMUX = 0x70

    /**
     * Seleciona o canal do MUX (TCA9548A) para uma variável qualquer.
     */
    //% block="Selecionar canal para variável %variavel na porta %canal"
    //% variavel.shadow=variables_get
    //% canal.min=0 canal.max=7
    export function selecionarCanal(variavel: any, canal: number): void {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    /**
     * Selecionar diretamente o canal sem variável.
     */
    //% block="Selecionar canal direto %canal"
    //% canal.min=0 canal.max=7
    export function selecionarCanalDireto(canal: number): void {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    /**
     * Selecionar e executar bloco dentro do canal
     */
    //% block="Usar canal %canal e executar %corpo"
    //% canal.min=0 canal.max=7
    export function comCanal(canal: number, corpo: () => void): void {
        selecionarCanalDireto(canal)
        corpo()
    }

}

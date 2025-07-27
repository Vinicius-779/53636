//% weight=100 color=#00AEEF icon="" block="Multiplexador"
namespace Multiplexador {

    let enderecoMUX = 0x70

    /**
     * Define o endereço I2C do MUX (opcional).
     */
    //% block="Selecionar endereço do MUX %endereco"
    //% endereco.min=112 endereco.max=119
    export function selecionarEndereco(endereco: number) {
        enderecoMUX = endereco
    }

    /**
     * Seleciona um canal do MUX com uma variável no estilo encaixe.
     */
    //% block="Selecionar canal de %variavel na porta %canal"
    //% canal.min=0 canal.max=7
    //% variavel.shadow=variables_get
    export function selecionarCanalComVariavel(variavel: any, canal: number) {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    /**
     * Desativa todos os canais do MUX.
     */
    //% block="Desativar todos os canais do MUX"
    export function desativarCanais() {
        pins.i2cWriteNumber(enderecoMUX, 0x00, NumberFormat.UInt8BE)
    }
}

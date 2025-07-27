//% weight=100 color=#00AEEF icon="" block="Multiplexador TCA9548A"
namespace MultiplexadorTCA {

    let enderecoMUX = 0x70

    /**
     * Define o endereço I2C do MUX (opcional, padrão = 0x70).
     */
    //% block="Definir endereço do MUX para %endereco"
    //% endereco.min=112 endereco.max=119
    export function definirEnderecoMUX(endereco: number) {
        enderecoMUX = endereco
    }

    /**
     * Associa uma variável a um canal do MUX.
     */
    //% block="Associar variável %variavel ao canal %canal"
    //% canal.min=0 canal.max=7
    export function associarVariavel(variavel: { valor: number }, canal: number) {
        variavel.valor = canal
    }

    /**
     * Seleciona o canal do MUX com base na variável associada.
     */
    //% block="Selecionar canal da variável %variavel"
    //% variavel.shadow=variables_get
    export function selecionarCanalDaVariavel(variavel: { valor: number }) {
        if (variavel.valor >= 0 && variavel.valor <= 7) {
            pins.i2cWriteNumber(enderecoMUX, 1 << variavel.valor, NumberFormat.UInt8BE)
        }
    }

    /**
     * Desativa todos os canais do MUX.
     */
    //% block="Desativar todos os canais do MUX"
    export function desativarTodos() {
        pins.i2cWriteNumber(enderecoMUX, 0x00, NumberFormat.UInt8BE)
    }
}

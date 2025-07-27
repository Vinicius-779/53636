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
     * Seleciona um canal do MUX usando uma variável e número da porta.
     */
    //% block="Selecionar canal para [variável] %nome na porta %canal"
    //% canal.min=0 canal.max=7
    //% nome.shadow=variables_get
    export function selecionarCanal(nome: any, canal: number) {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    /**
     * Desativar todos os canais.
     */
    //% block="Selecionar nenhum canal"
    export function desativarTodos() {
        pins.i2cWriteNumber(enderecoMUX, 0x00, NumberFormat.UInt8BE)
    }
}

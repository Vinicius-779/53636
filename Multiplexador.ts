//% weight=100 color=#00AEEF icon="" block="MUX Avançado"
namespace MultiplexadorTCA {

    let enderecoMUX = 0x70

    /**
     * Define o endereço I2C do multiplexador (padrão 0x70)
     */
    //% block="Definir endereço do MUX para %endereco"
    //% endereco.min=112 endereco.max=119
    export function definirEnderecoMUX(endereco: number) {
        enderecoMUX = endereco
    }

    /**
     * Seleciona o canal no multiplexador
     */
    //% block="Selecionar canal %canal"
    //% canal.min=0 canal.max=7
    export function selecionarCanal(canal: number): void {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    /**
     * Associa o número do canal a uma variável
     */
    //% block="Associar variável $minhaVariavel ao canal %canal"
    //% minhaVariavel.defl=minhaVariavel
    //% canal.min=0 canal.max=7
    export function associarVariavel(minhaVariavel: any, canal: number): void {
        minhaVariavel.valor = canal
    }
}

enum SensorTipo {
    //% block="Sensor de Cor 1"
    Cor1,
    //% block="Sensor de Linha 1"
    Linha1,
    //% block="Sensor de Cor 2"
    Cor2,
    //% block="Sensor de Linha 2"
    Linha2
}

namespace MultiplexadorTCA {

    let enderecoMUX = 0x70

    // Guarda associação sensor -> canal
    let sensorCanalMap = new Map<SensorTipo, number>()

    //% block="Associar sensor %sensor ao canal %canal"
    //% canal.min=0 canal.max=7
    export function associarSensorCanal(sensor: SensorTipo, canal: number): void {
        sensorCanalMap.set(sensor, canal)
        // opcional: selecionar canal fisicamente
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    //% block="Obter canal do sensor %sensor"
    export function obterCanalSensor(sensor: SensorTipo): number {
        const canal = sensorCanalMap.get(sensor)
        if (canal === undefined) {
            return -1
        }
        return canal
    }

    //% block="Selecionar canal do MUX %canal"
    //% canal.min=0 canal.max=7
    export function selecionarCanal(canal: number): void {
        pins.i2cWriteNumber(enderecoMUX, 1 << canal, NumberFormat.UInt8BE)
    }

    //% block="Definir endereço do MUX para %endereco"
    //% endereco.min=112 endereco.max=119
    export function definirEnderecoMUX(endereco: number) {
        enderecoMUX = endereco
    }
}

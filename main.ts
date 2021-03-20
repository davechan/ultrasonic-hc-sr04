let distance = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P14, 116)
    pins.analogWritePin(AnalogPin.P13, 124)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(15)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P2, PulseValue.High), 40)
    led.plotBarGraph(
    distance,
    30
    )
    basic.pause(100)
})

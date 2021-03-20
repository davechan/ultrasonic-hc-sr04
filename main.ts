let distance = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P13, 1)
    control.waitMicros(15)
    pins.digitalWritePin(DigitalPin.P13, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P13, PulseValue.High), 40)
    basic.showNumber(distance)
    basic.pause(100)
})

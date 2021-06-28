input.onButtonPressed(Button.A, function () {
    Messung = !(Messung)
})
input.onButtonPressed(Button.B, function () {
    for (let Index = 0; Index <= Werteliste.length; Index++) {
        serial.writeValue("B", Werteliste[Index])
    }
})
let Werteliste: number[] = []
let Messung = false
let Beschleunigung = 0
basic.showString("Init")
for (let index = 0; index < 300; index++) {
    Beschleunigung = input.acceleration(Dimension.Strength)
}
basic.showString("Ready")
Messung = false
basic.forever(function () {
    if (Messung) {
        basic.setLedColor(0xff0000)
        Beschleunigung = input.acceleration(Dimension.Strength)
        Werteliste.push(Beschleunigung)
    } else {
        basic.turnRgbLedOff()
    }
})

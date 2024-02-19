// Function to Read Line Sensors to Detect Edge of Dohyo
function read_line (list2: number[]) {
    s = 0
    for (let value of list2) {
        s = s + value
    }
    return s
}
input.buttonD12.onEvent(ButtonEvent.Click, function () {
    music.playMelody("B A G A G F A C5 ", 250)
    timer = 0
    // Main Body
    while (true) {
        // Read Line Following Sensors to Detect Edge of Dohyo
        sm = read_line(zumo.readLine())
        // Is Robot inside Dohyo?
        if (sm < 500) {
            // Run Motor at High Speed
            zumo.runMotor(ZumoMotor.All, 100)
            pause(10)
            // Read Line Following Sensors to Detect Edge of Dohyo
            sm = read_line(zumo.readLine())
        } else {
            // Edge of Dohyo Detected, Stop and Turn Around
            zumo.stopMotor(ZumoMotor.All)
            zumo.runMotor(ZumoMotor.All, -100)
            pause(1000)
            zumo.TurnDirection(ZumoMotor.right, 99)
            pause(1000)
            // Edge of Dohyo Detected, Stop and Turn Around
            zumo.stopMotor(ZumoMotor.All)
        }
    }
})
let sm = 0
let timer = 0
let s = 0
zumo.createI2C(pins.SCL, pins.SDA)
zumo.init(128, 64)
zumo.Initialization(Lightype.DIGITAL)
zumo.writeStringNewLine("String Theory!!!")
music.baDing.play()
let strip = light.createStrip(pins.D6, 30)
strip.setAll(0x00ffff)

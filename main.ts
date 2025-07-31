let temp = 0
bluetooth.startUartService()
basic.forever(function () {
    temp = input.temperature()
    // แสดงผลผ่าน Serial และ Bluetooth
    serial.writeLine("USB Temp:" + temp)
    bluetooth.uartWriteLine("BLE Temp:" + temp)
    // แสดงไอคอนตามอุณหภูมิ
    if (temp <= 25) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else if (temp >= 26) {
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
    // ส่งข้อมูลทุก 0.5 วินาที เพื่อความปลอดภัย
    basic.pause(500)
})

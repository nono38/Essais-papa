input.onButtonPressed(Button.A, function () {
    index += -1
    basic.showNumber(numbers[index])
})
input.onButtonPressed(Button.B, function () {
    index += 1
    basic.showNumber(numbers[index])
})
let index = 0
let numbers: number[] = []
kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 50)
numbers = [3, 1, 10]
index = 0

input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 F B E D G E A ", 120)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)

input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
})
basic.showLeds(`
    . # . # .
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    `)
basic.forever(function () {
	
})

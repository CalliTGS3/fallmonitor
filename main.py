Beschleunigung = 0

def on_forever():
    global Beschleunigung
    Beschleunigung = input.acceleration(Dimension.X)
basic.forever(on_forever)

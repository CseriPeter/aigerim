import dtr from "./degreeconverter"


export let upAnim = {
    initial: { opacity: 0, y: +200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: +200 }
}

export let leftAnim = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 }
}

export let rightAnim = {
    initial: { opacity: 0, x: +200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: +200 }
}

export let divideAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

export let backgroundAnim = {
    initial: {
        rotateX: dtr(35),
        rotateY: dtr(145),
    },
    animate: {
        rotateX: [null, dtr(35), dtr(40), dtr(40), dtr(35)],
        rotateY: [null, dtr(165), dtr(165), dtr(145), dtr(145)],
    },
}

export let mouseAnim = {
    rotateY: [null,0.3,-0.1,0.05],
    x: [null,0.03,0.01,-0.02],
}

const bookScale = [null, 1, 1.5, 1, 1]
export let bookAnim = {
    scaleX: bookScale,
    scaleY: bookScale,
    scaleZ: bookScale,
    rotateX: [null,-0.3, -0.3,-0.3, 0],
}

export let coffeeAnim = {
    z: [null,0.1,0],
    y: [null,0.1,0],
    rotateX: [null,-0.4,0]
}
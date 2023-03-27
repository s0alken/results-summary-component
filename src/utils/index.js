export const parentVariant = {
    initial: "hidden",
    animate: "visible",
    variants: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .1,
                delayChildren: .6
            }
        }
    }
}

export const childrenVariant = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .7
        }
    }
}
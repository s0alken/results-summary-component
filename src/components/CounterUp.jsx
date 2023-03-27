import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export const CounterUp = ({ from, to }) => {

    const ref = useRef();

    useEffect(() => {

        const controls = animate(from, to, {
            delay: 1,
            duration: 2,
            onUpdate(value) {
                ref.current.textContent = Math.round(value);
            }
        });

        return () => controls.stop();

    }, [from, to]);

    return (
        <span ref={ref} />
    )
}

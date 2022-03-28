import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Animation = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 275 }
            }}
        >
            {children}
        </motion.div>
    );
}

Animation.propTypes = {
    children: PropTypes.node.isRequired
};

export default Animation;

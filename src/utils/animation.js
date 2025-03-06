import { delay } from "motion";

export const slideInVariants = (
    direction = 'left',
    duration = 0.5,
    distance = true,
    useCustom = true,
) =>{
    const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
    const y = direction === 'top' ? -distance : direction === 'bottom' ? distance : 0;
    return {
        hidden: {x, y, opacity: 0},
        visible: (i) => {
            const animation = {
                x:0,
                y:0,
                opacity:1,
                transition: {
                    delay: useCustom ? i * 0.3 : 0,
                    duration,
                    ease: 'easeOut'
                }
            }

            return animation
        }
    }
}


export const titleVariants = {
    hidden: { y: -50, opacity: 0},
    visible: { y:0, opacity: 0.1, transition: {duration: 0.8}},
}


export const subtitleVariants = {
    hidden: { y: -45, opacity: 0},
    visible: {
        y:0,
        opacity:1,
        transition: {duration:0.8, delay:0.4}
    }
}








// export const iconVariants = {
//     hidden:{x: 50, opacity: 0},
//     visible:(i)=>({
//         x: 0,
//         opacity: 1,
//         transition: {
//             delay: i * 0.2, duration: 0.5, ease: 'easeOut'
//         }
//     })
// }


// export const motionVariants = {
//     hidden:{x: -50, opacity: 0},
//     visible:(i)=>({
//         x: 0,
//         opacity: 1,
//         transition: {
//             delay: i * 0.3, duration: 0.5, ease: 'easeOut'
//         }
//     })
// }

// export const imageVariants = {
//     hidden:{x: 150, opacity: 0},
//     visible:()=>({
//         x: 0,
//         opacity: 1,
//         transition: {
//             delay: 0.6, duration: 0.9, ease: 'easeOut'
//         }
//     })
// }


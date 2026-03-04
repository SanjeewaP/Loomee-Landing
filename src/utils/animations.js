/* ====================================
   ANIMATION VARIANTS
   ==================================== */
export const ease = [0.25, 0.46, 0.45, 0.94]

export const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } }
}

export const revealSoft = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } }
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
}

export const staggerMed = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.07 } }
}

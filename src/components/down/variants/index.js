const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
}

const typo = {
  hidden: { opacity: 0, x: 0 },
  show: {
    opacity: 1,
    x: 2,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
}

export { container, item, typo }

import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import Subtitle from './Subtitle'
import Dot from './Dot'
import images from './fake'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92
const LEFT = 64

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    display: 'flex',
    height: `calc(100vh - ${APP_BAR_MOBILE}px)`,
    backgroundColor: palette.background.default,
    [breakpoints.up('lg')]: {
      height: `calc(100vh - ${APP_BAR_DESKTOP}px)`
    },
    '& .text': {
      width: '50vw',
      '& .title': {
        top: '25%',
        left: LEFT,
        position: 'absolute'
      },
      '& .subtitle': {
        top: '35%',
        left: LEFT,
        position: 'absolute'
      },
      '& .dots': {
        top: '50%',
        transform: 'translate(50%,-50%)',
        right: '50%',
        left: '-50%',
        position: 'absolute',
        '& span': {
          width: 12,
          height: 12,
          borderRadius: '50%',
          display: 'block',
          margin: 10,
          cursor: 'pointer'
        }
      }
    },
    '& .illustrations': {
      width: '60vw',
      display: 'flex',
      flexDirection: 'row',
      '& .presentation ': {
        display: 'flex',
        flexDirection: 'column',
        '& img': {
          width: 250,
          margin: '0.2em',
          objectFit: 'cover'
        }
      }
    }
  }
}))

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.3,
      when: 'beforeChildren'
    }
  },
  exit: { opacity: 0, y: -24 }
}

const container = {
  hidden: {
    hidden: { opacity: 0, y: 24 }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1
    }
  },
  exit: { opacity: 0, y: -24 }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  },
  exit: { opacity: 0, y: -24 }
}

function GettingStarted() {
  const classes = useStyles()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
      if (counter >= 3) {
        setCounter(0)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <motion.div className={classes.root}>
      <motion.div className="text">
        <motion.div className="dots">
          <Dot state={counter} setState={setCounter} id="0" />
          <Dot state={counter} setState={setCounter} id="1" />
          <Dot state={counter} setState={setCounter} id="2" />
          <Dot state={counter} setState={setCounter} id="3" />
        </motion.div>
        <Typography className="title" variant="h2" color="textSecondary">
          Get your next
        </Typography>
        <Subtitle state={counter === 0}>weeknight dinner idea</Subtitle>
        <Subtitle state={counter === 1}>new look outfitg</Subtitle>
        <Subtitle state={counter === 2}>new look outfit</Subtitle>
        <Subtitle state={counter === 3}>green thumb idea</Subtitle>
      </motion.div>

      <motion.div
        className="illustrations"
        variants={parent}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AnimatePresence exitBeforeEnter>
          {images.map((a, index) => {
            if (index <= 2) {
              return (
                <>
                  {counter === 0 && (
                    <motion.div className="presentation" variants={container}>
                      {a.map((o) => (
                        <motion.img src={o.src} alt="" variants={item} />
                      ))}
                    </motion.div>
                  )}
                </>
              )
            } else if (index > 2 && index <= 5) {
              return (
                <>
                  {counter === 1 && (
                    <motion.div className="presentation" variants={container}>
                      {a.map((o) => (
                        <motion.img src={o.src} alt="" variants={item} />
                      ))}
                    </motion.div>
                  )}
                </>
              )
            } else if (index > 5 && index <= 8) {
              return (
                <>
                  {counter === 2 && (
                    <motion.div className="presentation" variants={container}>
                      {a.map((o) => (
                        <motion.img src={o.src} alt="" variants={item} />
                      ))}
                    </motion.div>
                  )}
                </>
              )
            } else if (index > 8 && index <= 11) {
              return (
                <>
                  {counter === 3 && (
                    <motion.div className="presentation" variants={container}>
                      {a.map((o) => (
                        <motion.img src={o.src} alt="" variants={item} />
                      ))}
                    </motion.div>
                  )}
                </>
              )
            } else {
              return null
            }
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default GettingStarted

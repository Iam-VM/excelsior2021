import React, { useState, useEffect, useRef } from "react"
import { peopleDesktop } from "./constants/Data"
import { Slider } from "./Slider"
import * as styles from "./events.module.css"
import Arrow from "../../images/arrow.svg"
import SectionImage from "../../images/Alumni/SectionImage.svg"

function Carousel() {
  const state = useRef(peopleDesktop)
  const [currentSlide, setCurrentSlide] = useState(0)
  const delay = useRef(4000)
  useEffect(() => {
    const { length } = state.current
    if (currentSlide < 0) {
      setCurrentSlide(length - 1)
    }
    if (currentSlide === length) {
      setCurrentSlide(0)
    }
  }, [currentSlide])

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(prevSlide => prevSlide + 1)
    }, delay.current)
    return () => {
      clearInterval(slider)
    }
  }, [currentSlide])

  return (
    <section className={styles.section}>
      <img src={SectionImage} className={styles.sectionImage} />

      <div style={{ marginTop: "10rem" }} className={styles.sectionCenter}>
        <Slider slides={state.current} currentSlide={currentSlide} />
      </div>
    </section>
  )
}

export default Carousel

import { useEffect, useRef, useState } from "react"

interface State {
  x: number
  y: number
}

const isClient = typeof window === "object"

export const useWindowScroll = () => {
  const frame = useRef(0)

  const [state, setState] = useState<State>({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  })

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current)

      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.pageXOffset,
          y: window.pageYOffset,
        })
      })
    }

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true,
    })

    return () => {
      cancelAnimationFrame(frame.current)
      window.removeEventListener("scroll", handler)
    }
  }, [])

  return state
}

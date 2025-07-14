import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 600)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    visible && (
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        <div className="absolute bottom-14 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
          Back to Top
        </div>

        {/* Button */}
        <button
          onClick={scrollToTop}
          className="bg-cyan-500 text-white p-3 rounded-full shadow-md hover:bg-cyan-600 transition-all"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    )
  )
}

export default BackToTopButton

import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustumCurser = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState('default')
    const [isDesktop, setIsDesktop] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        // Only show custom cursor on desktop (non-touch devices)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        setIsDesktop(!isTouchDevice)
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (!isDesktop) return

        // Initialize cursor position
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        
        // Set initial position to center of screen
        setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

        // Handle hover on interactive elements, text, and images
        const handleMouseOver = (e) => {
            const target = e.target
            
            // Check if element or parent has data-no-custom-cursor attribute (exclude from cursor effects)
            if (target.closest('[data-no-custom-cursor]')) {
                setCursorVariant('default')
                return
            }
            
            // Check if it's an interactive element
            const isInteractive = !!(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                window.getComputedStyle(target).cursor === 'pointer'
            )
            
            // Check if it's a text element
            const textTags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'LABEL', 'LI']
            const isTextElement = !!(
                textTags.includes(target.tagName) ||
                (target.closest('h1, h2, h3, h4, h5, h6, p, span, label, li') && 
                 target.textContent && target.textContent.trim().length > 0)
            )
            
            // Check if it's an image or inside an image container
            let isImage = false
            if (target.tagName === 'IMG') {
                isImage = true
            } else {
                // Check if element or any parent contains or is an img
                let el = target
                let depth = 0
                while (el && el !== document.body && el !== document.documentElement && depth < 10) {
                    if (el.tagName === 'IMG') {
                        isImage = true
                        break
                    }
                    // Check if this element has an img as child or sibling
                    if (el.querySelector) {
                        const img = el.querySelector('img')
                        if (img) {
                            isImage = true
                            break
                        }
                    }
                    el = el.parentElement
                    depth++
                }
            }
            
            // Always reset to default first, then check if should be large
            setCursorVariant('default')
            
            // Only set to large size if hovering over text, image, or interactive element
            if (isInteractive || isTextElement || isImage) {
                setCursorVariant('text')
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseOver, true)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseOver, true)
        }
    }, [isDesktop])

    if (!isDesktop || !isMounted) {
        return null
    }

    const size = cursorVariant === 'text' ? 150 : 32
    const offset = cursorVariant === 'text' ? 75 : 16
    const bgColor = cursorVariant === 'text' ? '#ffffff' : '#000000'
    const blendMode = cursorVariant === 'text' ? 'difference' : 'normal'

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999]"
            style={{
                willChange: 'transform',
                borderRadius: '50%',
            }}
            animate={{
                x: mousePosition.x - offset,
                y: mousePosition.y - offset,
                height: size,
                width: size,
                backgroundColor: bgColor,
                mixBlendMode: blendMode,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        />
    )
}

export default CustumCurser
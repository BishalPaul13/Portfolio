import { useEffect, useRef } from "react";

export const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        // Disabled on touch devices and small screens
        if (window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window) {
            return;
        }

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Move dot instantly
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        };

        const onMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            if (isClickable) {
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(3.5)`;
                dot.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
                dot.style.border = '1px solid rgba(239, 68, 68, 0.8)';
                ring.style.opacity = '0';
            } else {
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
                dot.style.backgroundColor = 'rgba(239, 68, 68, 1)';
                dot.style.border = 'none';
                ring.style.opacity = '1';
            }
        };

        let animationFrameId;
        const render = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseover", onMouseOver);
        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseover", onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="hidden md:block pointer-events-none z-[9999]">
            {/* The trailing ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-red-500/40 pointer-events-none transition-opacity duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] z-[9999]"
                style={{ willChange: 'transform' }}
            />
            {/* The main dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-red-500 rounded-full pointer-events-none transition-all duration-150 ease-out shadow-[0_0_10px_rgba(239,68,68,0.8)] z-[9999]"
                style={{ willChange: 'transform' }}
            />
            <style>
                {`
                    @media (min-width: 768px) {
                        body, a, button {
                            cursor: none !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

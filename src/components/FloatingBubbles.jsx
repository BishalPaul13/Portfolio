import { useState, useEffect } from "react";

export const FloatingBubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const generatedBubbles = Array.from({ length: 40 }).map(() => ({
            id: Math.random(),
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.4 + 0.1,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `-${Math.random() * 20}s`
        }));
        setBubbles(generatedBubbles);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute bottom-[-10px] bg-white rounded-full animate-float-up"
                    style={{
                        left: bubble.left,
                        width: bubble.size,
                        height: bubble.size,
                        opacity: bubble.opacity,
                        animationDuration: bubble.animationDuration,
                        animationDelay: bubble.animationDelay,
                    }}
                />
            ))}
        </div>
    );
};

import fieldImage from '../assets/field-image.jpg'
import { useState, useEffect } from 'react'
import React from 'react'
import { useDrop } from "react-dnd";
import { ItemTypes } from '../App';

export const Field = ({ children }: { robotX: number, robotY: number, children?: React.ReactNode }) => {
    
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: ItemTypes.ROBOT,
    //     drop: () => moveRobotTo(x, y),
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }), [x, y])

    return (
        <div>
            <img
                src={fieldImage}
                alt="Field"
                style={{
                    width: "90%",
                    top: 0,
                    left: 0,
                }}
            />

            {children}
        </div>
    )
}

export const useContainerDimensions = (myRef: React.MutableRefObject<HTMLElement | null>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    
    useEffect(() => {
        const getDimensions = () => {
            if (!myRef.current) {
                return { width: 0, height: 0 }
            } else {
                return {
                    width: myRef.current.offsetWidth,
                    height: myRef.current.offsetHeight
                }
            }
        }
  
        const handleResize = () => {
            setDimensions(getDimensions())
        }
    
        if (myRef.current) {
            setDimensions(getDimensions())
        }
    
        window.addEventListener("resize", handleResize)
    
        return () => {
            window.removeEventListener("resize", handleResize)
        }
        }, [myRef])
    
        return dimensions;
  };

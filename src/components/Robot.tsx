export const Robot = () => {
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: ItemTypes.ROBOT,
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // })) 

    document.addEventListener("mousedown", dragStart);

    return (
        <img
            // ref={drag}
            id="robot"
            src="src\assets\blue-robot.png"
            alt="Robot"
            style={{
                // opacity: isDragging ? 0.5 : 1,
                width: "5%",
                position: "absolute",
                top: 0,
                left: 0,
            }}
        />
    );
}

/**
 * Handles the start of a drag operation on the robot.
 * 
 * @param {React.MouseEvent<HTMLImageElement>} event - The mousedown event that started the drag.
 */
const dragStart: any = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault(); // Prevent default browser behavior
    event.stopPropagation(); // Prevent event from bubbling up
    
    const robotElement = event.target as HTMLImageElement;
    const startX = event.clientX;
    const startY = event.clientY;
    const initialLeft = robotElement.offsetLeft;
    const initialTop = robotElement.offsetTop;

    const move = (event: MouseEvent) => {
        console.log("move");
        const currentX = event.clientX;
        const currentY = event.clientY;
        robotElement.style.left = `${initialLeft + (currentX - startX)}px`;
        robotElement.style.top = `${initialTop + (currentY - startY)}px`;
    }

    const up = () => {
        console.log("up");
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
}

const moveRobotTo = (x: number, y: number) => {
    const robotElement = document.getElementById("robot");
    if (robotElement) {
        robotElement.style.left = `${x}px`;
        robotElement.style.top = `${y}px`;
    }
};


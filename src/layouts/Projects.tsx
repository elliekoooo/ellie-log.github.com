import { Navigation } from "../components/Navigation"
import { ImageBox } from "../components/ImageBox"

export const Projects = () => {
    return (
        <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
            <div className="relative shadow-neon-blue rounded-3xl w-[80vw] h-[90vh] overflow-hidden bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh]">
                    <Navigation path={"projects"} />
                    <div className="flex flex-row text-white">
                        <ImageBox></ImageBox>
                    </div>
                </div>
            </div>
        </div>
    )
}
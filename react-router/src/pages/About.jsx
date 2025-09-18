import {useEffect} from "react";

export const AboutPage = () => {
    useEffect(() => {
        console.log("AboutPage");
    }, [])
    return (
        <div>
            Hello, I'm the about page!
        </div>
    )
}
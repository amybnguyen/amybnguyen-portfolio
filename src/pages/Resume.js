import React from "react";
import resume from '../components/NguyenAmyResume.pdf'


function Resume() {
    return (
            <iframe src={resume} width="100%" height="2000px" title="resume" />
    )
}

export default Resume;
import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
function Teacher() {
    const [coursesList, setCourseslist] = useState(null);
    const getCourses = async () => {
        let courses = await fetch('http://localhost:8000/getCourses').then(res => res.json()).then(data => {console.log('data', data);
        setCourseslist(data)}
        )
        // console.log("courses",courses)
    }

    useEffect(() => {
        console.log("dffff")
        getCourses()

    }, [])
    return (

        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', margin: '100px 3px 3px 3px' }}>
        
            {coursesList && coursesList.map((course, i) => <div style={{ margin: "10px 10px 10px 10px" }}>
                <NavLink exact to={`/teacher/${(course.name).split(' ').join('_').toLowerCase()}`}>
                    <button style={{ backgroundColor: "cyan", width: "7rem", height: "4rem" }}>{course.name}</button>

                </NavLink>

            </div>
            )}


                    <button style={{ backgroundColor: "blue", width: "7rem", height: "4rem" }} >+Add Course</button>

            

        </div>)
}

export default Teacher

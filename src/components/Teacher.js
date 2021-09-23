import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
function Teacher() {
    const [coursesList, setCourseslist] = useState(null);
    const [course, setcourse] = useState(null)
    const [userAnswer,setuserAnswer]=useState(null)
    console.log('course', course)
    const [quiz, getQuiz] = useState(null);
    const getCourses = async () => {
        let courses = await fetch('https://navigus-bquiz.herokuapp.com/getCourses').then(res => res.json()).then(data => {
            console.log('data', data);
            setCourseslist(data)
        }
        )
        // console.log("courses",courses)
    }

    const getQuestions = async () => {
        let quizes = await fetch('https://navigus-bquiz.herokuapp.com/questions').then(res => res.json()).then(data => {
            console.log('data quiz data', data);
            getQuiz(data)
        }
        )


    }

    useEffect(() => {
        console.log("dffff")
        getCourses()
        getQuestions()

    }, [])
    return (<>

        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', margin: '100px 3px 3px 3px' }}>

            {coursesList && coursesList.map((course, i) => <div style={{ margin: "10px 10px 10px 10px" }}
                onClick={() => setcourse(course.name)}
            >
                {/* <NavLink exact to={`/teacher/${(course.name).split(' ').join('_').toLowerCase()}`}> */}
                <button style={{ backgroundColor: "cyan", width: "7rem", height: "4rem" }}>{course.name}</button>

                {/* </NavLink> */}

            </div>
            )}


            <button style={{ backgroundColor: "blue", width: "7rem", height: "4rem" }} >+Add Course</button>



        </div>

        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '100px 3px 3px 3px' }}>
            {quiz && quiz.filter(q => q.subject === course).length > 0 && quiz.filter(q => q.subject === course).map((ques, j) => <div key={j}>

                <div> {ques.question}</div>
                {ques.options.map((opt, k) => <div key={k}  style={{ display: "flex", flexDirection: 'row' }}>
                    {/* <label class="container">One
                        <input type="checkbox" checked="checked">
                            <span class="checkmark"></span></input>
                    </label> */}
                    <div style={{
                        width: '3rem', height: '3rem',

                        height: '25px',
                        width: '25px',
                        backgroundColor: '#bbb',
                        borderRadius: '50%',
                        display: 'inline-block'


                    }}> </div>
                    <div>{opt}</div></div>)}

            </div>)}
        </div>

    </>)
}

export default Teacher

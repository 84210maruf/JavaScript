//In Object..
const course = {
    name: "React Crash Course",
    details:{
        price:"200 TK",
        durations:"2 hours"
    }
}

//const {details:{price}} = course;
// with default value if p doesn't exist
const{details:{price = "100 TK"}} = course;

console.log(course.details);
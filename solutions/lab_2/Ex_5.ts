interface Course {
    name: string
    duration: number
    students: string[]
}

class OnlineCourse implements Course {
    constructor(public name: string,
                public duration: number,
                public students: string[] = []) {
    }

    public registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student)
        }
    }

    public isStudentRegistered(student: string): boolean {
        return this.students.indexOf(student) !== -1
    }
}

class CourseManager{
    constructor(private courses: Course[] = []) {
    }

    public addCourse(course: Course): void{
        this.courses.push(course)
    }

    public removeCourse(courseName: string): void{
        this.courses = this.courses.filter((elem) => elem.name !== courseName)
    }

    public findCourse(courseName: string): Course | undefined{
        for (let c of this.courses){
            if(c.name === courseName)
                return c
        }
        return undefined
    }

    public listCourses(): void {
        this.courses.forEach(course => {
            console.log(`Course: ${course.name} (${course.duration} weeks)`);
            console.log(`Students: ${course.students.length > 0 ? course.students.join(", ") : "No students"}`);
            console.log("----------");
        });
    }
}

const jsCourse = new OnlineCourse("JavaScript Basics", 6);
const tsCourse = new OnlineCourse("TypeScript Advanced", 8);
const javaCourse = new OnlineCourse("Java OOP", 10);

const manager = new CourseManager();
manager.addCourse(jsCourse);
manager.addCourse(tsCourse);
manager.addCourse(javaCourse);

jsCourse.registerStudent("Alice");
jsCourse.registerStudent("Bob");
tsCourse.registerStudent("Charlie");
javaCourse.registerStudent("Diana");
javaCourse.registerStudent("Eve");

manager.listCourses();
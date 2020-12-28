import { useState } from "react";
import { CourseCard } from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({ name: '', code: '', grade: 'A', credit: '1' });
  const [GPA, setGPA] = useState(0.00);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    //CourseCard()
    var r_gpa = 0
    var r_cre  = 0 
    var cal_gpa = 0
    cc.forEach((objjj) => {
      switch(objjj.grade){
        case 'A' :
          r_gpa = 4
          r_cre += Number(objjj.credit) 
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'B+' :
          r_gpa = 3.5
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'B' :
          r_gpa = 3
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'C+' :
          r_gpa = 2.5
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'C' :
          r_gpa = 2
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'D+' :
          r_gpa = 1.5
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'D' :
          r_gpa = 1
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
        case 'F' :
          r_gpa = 0
          r_cre += Number(objjj.credit)
          cal_gpa += r_gpa * Number(objjj.credit)
          break
      }  
    });
    if (cc.length == 0 && cc) {
      setGPA(0.00)
    }
    else {
      setGPA(cal_gpa / r_cre) 
    }
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    const ccc = [...myCourses,inputData]
    if(inputData.name == "" || inputData.code == "" || inputData.grade == "" || inputData.credit == "" || isNaN(inputData.code) || inputData.code.length != 6 ){
      alert("please input full or correct information")
    }
    else {
      alert("added")
      setMyCourse(ccc)
      calculateGPA(ccc);
    }
    // TODO

    // recalculate GPA
    
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(name) {
    // TODO
    const cc = myCourses.filter(function(objj){
      return objj.name !== name;
    });

    setMyCourse(cc)
    calculateGPA(cc)
  }



  return (
    <div class="container custom-scrollbar" >
      <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
       {myCourses.map((obj) =>{
         const delbtn = document.createElement('button')
         delbtn.innerHTML = 'x'
         delbtn.onclick = () => {
           onDeleteCourse(obj.name)
         }
         return <CourseCard name_1 = {obj.name} code_1 ={obj.code} grade_1 ={obj.grade} credit_1 ={obj.credit} del_1 ={onDeleteCourse} />
       })}
      </div>
      <div className=" md:w-11/12 p-3 rounded-lg mx-auto overflow-auto">
        <form onSubmit={addCourse} >
          <input type="text" placeholder=" ชื่อวิชา" className="bg-blue-300 w-1/6 p-2 m-5 rounded-3xl" value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />
          <input type="text" placeholder=" รหัสวิชา" className="bg-blue-300 p-2 w-1/6 m-5 rounded-3xl " value={inputData.code} onChange={(e) => setInputData({ ...inputData, code: e.target.value })} />
          <select name='garde' className='bg-blue-300 w-1/6 m-5 p-2 rounded-3xl ' value={inputData.garde} onChange={(e) => setInputData({ ...inputData, grade: e.target.value })}>{
            grade.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select >
          <select name='credit' className='bg-blue-300  p-2 w-1/6 m-5 rounded-3xl ' value={inputData.credit} onChange={(e) => setInputData({ ...inputData, credit: e.target.value })} >{
            credit.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <button type='submit' className='bg-blue-300 w-auto m-5 p-2 rounded-3xl bg-blue-500 hover:bg-blue-700' onClick={(e) => console.log(myCourses)}>{'\u2714'}</button>
        </form>
      </div>
      {/* <button onClick={(e) => console.log(myCourses)} className='m-5 p-10px'>{'\u2718'}</button> */}
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <div className="bg-blue-300 p-5 rounded-3xl m-3">
        <h2 className="text-center  md:text-center text-2xl">GPA : {GPA.toFixed(2)}</h2>
      </div><br />
    </div>
    </div>
    
  );
}

export default App;
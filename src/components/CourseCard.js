export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.

  return (
  <div className="bg-blue-300 p-5 rounded-3xl m-3">
      <td className="w-full">
        <div>
          <h3 className="text-2xl">วิชา : {props.name_1}</h3>
          <h3 className="text-2xl">รหัสวิชา : {props.code_1}</h3>
          <h3 className="text-2xl">หน่วยกิจ : {props.credit_1}</h3>
          <h3 className="text-2xl">เกรด : {props.grade_1}</h3>
        </div>
      </td>
      <td>
        <button className="bg-blue-500 hover:bg-blue-700 object-right-top p-2 rounded-3xl "  onClick = {() => {
          props.del_1(props.name_1)
        }}>{'\u2716'}</button>
      </td>
    </div>
  );
};
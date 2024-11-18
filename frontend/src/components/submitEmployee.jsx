
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";



const Test = () => {
    const [filterPopupVisible, setFilterPopupVisible] = useState(false);
    const [ name, setName] = useState()
    const [ employeeid, setEmployeeid] = useState()
    const [ department, setDepartment] = useState()
    const [ salary, setSalary] = useState()
    const [employee, setEmployee] = useState([])
    
    
    const [userObj, setUserObj] = useState({
        name: "",
        employeeid: "",
        department: "",
        salary: "",
    });
    const closePopUp = async () => {
        setFilterPopupVisible(false);
        setUserObj({
            name: "",
            employeeid: "",
            department: "",
            salary: "",
        });
      }
    
      const getEmployeeData = ()=>{
        axios.get(`${BASE_URL}/employee`)
        .then((response) =>{
            setEmployee(response.data)
        })
        .catch((error) => console.error("Error fetching data:", error))
      }

      useEffect(() =>{
        getEmployeeData();
      },[])
      
      const handleSubmit = (e) => {
          e.preventDefault();
          axios.post(`${BASE_URL}/employee`,{
              name,
              employeeid,
              department,
              salary
            })
            .then(response=>{
                getEmployeeData();
            })
            .catch(error => console.error("Error fetching data POST:", error))
            closePopUp();
        };  

    
        return (<>
            <div className="h-screen">
                <div className='flex justify-center items-center'>
                    <button className='border-2 w-24 border-black mt-14'
                    onClick={()=> setFilterPopupVisible(true)}
                    >Add user</button>    
                </div>
                {/* <div className="flex justify-center mt-14">
                    <table>
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Employee ID</th>
                                <th className="px-4 py-2">Department</th>
                                <th className="px-4 py-2">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map((employee) => (
                                    <tr key={employee._id}>
                                        <td className="border px-4 py-2">{employee.name}</td>
                                        <td className="border px-4 py-2">{employee.employeeid}</td>
                                        <td className="border px-4 py-2">{employee.department}</td>
                                        <td className="border px-4 py-2">{employee.salary}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> */}
                <div className="w-full h-screen flex justify-center items-center">
                    <iframe title="power-react-embed" 
                        // width="600" height="373.5" 
                        className="w-full h-screen"
                        src="https://app.powerbi.com/view?r=eyJrIjoiNDkyNmQ0ZWMtOWMzMS00ODZiLWI5MGYtMmNiMDU2ZWY3OTVkIiwidCI6ImRiOTNmNTcwLTJiZTEtNDA4My05OWJhLTA4M2E0MWQyY2I0MSJ9" 
                        frameborder="0" 
                        allowFullScreen="true">
                    </iframe>
                </div>
                
             </div>
            {filterPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl  m-3">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold mb-4">Create User</h2>
                        <div>
                            <CloseIcon className="cursor-pointer" onClick={() => closePopUp()}/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                // value={userObj.name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-10 text-gray-800 border-gray-300"
                                placeholder="Name"
                        />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Employee ID</label>
                            <input
                                type="text"
                                name="employeeid"
                                // value={userObj.employeeid}
                                onChange={(e) => setEmployeeid(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-10 text-gray-800 border-gray-300"
                                placeholder="Employee ID"
                        />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Department</label>
                            <input
                                type="text"
                                name="department"
                                // value={userObj.department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-10 text-gray-800 border-gray-300"
                                placeholder="Department"
                        />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Salary</label>
                            <input
                                type="number"
                                name="salary"
                                // value={userObj.salary}
                                onChange={(e) => setSalary(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-10 text-gray-800 border-gray-300"
                                placeholder="Salary"
                        />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 rounded-lg w-24 h-12"
                            type="submit" 
                            // onClick={}
                            >Add User</button>
                        </div>
                    </form>
                    </div>
                </div>
            )}
        </>
  )
};

export default Test
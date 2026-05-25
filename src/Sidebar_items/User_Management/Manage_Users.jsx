import { useState } from "react";
import axios from "axios";
import "./Manage_Users.css";

export default function Manage_Users() {

    const [updateData, setUpdateData] = useState({
        id: "",
        name: "",
        email: "",
        role: "",
        department: "",
        salary: ""
    });

    const [updating, setUpdating] = useState(false);

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;

        setUpdateData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            setUpdating(true);

            const response = await axios.put(
                "https://backend-api-2-qep2.onrender.com/UpdateApi",
                updateData
            );

            console.log(response.data);

            alert("Employee Updated Successfully");

            setUpdateData({
                id: "",
                name: "",
                email: "",
                role: "",
                department: "",
                salary: ""
            });

        } catch (error) {
            console.log(error);
            alert("Update Failed");
        } finally {
            setUpdating(false);
        }
    };

    return (
        <div className="update-container">

            <form
                className="update-form"
                onSubmit={handleUpdateSubmit}
            >
                <h1>Update Employee</h1>

                <input
                    type="number"
                    name="id"
                    placeholder="Employee ID"
                    value={updateData.id}
                    onChange={handleUpdateChange}
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={updateData.name}
                    onChange={handleUpdateChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={updateData.email}
                    onChange={handleUpdateChange}
                />

                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={updateData.role}
                    onChange={handleUpdateChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={updateData.department}
                    onChange={handleUpdateChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={updateData.salary}
                    onChange={handleUpdateChange}
                />

                <button
                    type="submit"
                    disabled={updating}
                >
                    {updating ? "Updating..." : "Update Employee"}
                </button>

            </form>

        </div>
    );
}
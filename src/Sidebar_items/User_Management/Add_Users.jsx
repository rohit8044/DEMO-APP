import { useState } from "react";
import axios from "axios";
import "./Add_Users.css";

export default function Add_Users() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        department: "",
        salary: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.role ||
            !formData.department ||
            !formData.salary
        ) {
            alert("All fields are required");
            return;
        }

        try {
            setLoading(true);

            const response = await axios.post(
                "https://backend-api-2-qep2.onrender.com/InsertData",
                {
                    ...formData,
                    salary: Number(formData.salary)
                }
            );

            console.log(response.data);

            alert("Employee Added Successfully");

            setFormData({
                name: "",
                email: "",
                role: "",
                department: "",
                salary: ""
            });

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Insert Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            
            <form onSubmit={handleSubmit}>
                <h1> Employess Insert</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="role"
                    placeholder="Enter Role"
                    value={formData.role}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="department"
                    placeholder="Enter Department"
                    value={formData.department}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Enter Salary"
                    value={formData.salary}
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Employee"}
                </button>

            </form>
        </div>
    );
}
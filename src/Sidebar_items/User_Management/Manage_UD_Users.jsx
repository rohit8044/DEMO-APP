import { useState } from "react";
import axios from "axios";
import "./Manage_UD_Users.css";

export default function Manage_UD_Users() {

    const [deleteId, setDeleteId] = useState("");
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!deleteId) {
            alert("Please Enter Employee ID");
            return;
        }

        try {
            setDeleting(true);

           const response = await axios.delete(
    "https://backend-api-2-qep2.onrender.com/DeleteApi",
    {
        data: {
            id: deleteId
        }
    }
);
            console.log(response.data);

            alert("Employee Deleted Successfully");

            setDeleteId("");

        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="remove-wrapper">

            <form
                className="remove-form"
                onSubmit={handleDelete}
            >
                <h1>Delete Employee</h1>

                <input
                    type="number"
                    placeholder="Enter Employee ID"
                    value={deleteId}
                    onChange={(e) => setDeleteId(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={deleting}
                >
                    {deleting ? "Deleting..." : "Delete Employee"}
                </button>

            </form>

        </div>
    );
}
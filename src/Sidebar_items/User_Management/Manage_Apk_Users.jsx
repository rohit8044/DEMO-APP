import { useState } from "react";
import axios from "axios";

export default function Manage_Apk_Users() {
  const [phone, setPhone] = useState("");
  const [stateName, setStateName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const states = [
    "Bihar",
    "Uttar Pradesh",
    "Delhi",
    "Maharashtra",
    "Punjab",
    "Rajasthan",
    "Gujarat",
    "West Bengal",
    "Tamil Nadu",
    "Karnataka",
    "Haryana",
    "Madhya Pradesh",
    "Jharkhand",
    "Odisha",
    "Kerala",
    "Assam",
    "Chhattisgarh",
  ];

  const sendOtp = async () => {
    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "https://backend-api-2-qep2.onrender.com/SendOTP",
        {
          phone,
          state: stateName,
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "OTP Send Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>📱</div>

        <h1 style={styles.title}>Phone Verification</h1>

        <p style={styles.subtitle}>
          Enter your phone number and state to receive OTP
        </p>

        <select
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          style={styles.select}
        >
          <option value="">Select State</option>

          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={sendOtp}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {message && (
          <div
            style={{
              ...styles.messageBox,
              background:
                message.toLowerCase().includes("failed")
                  ? "#fee2e2"
                  : "#dcfce7",
              color:
                message.toLowerCase().includes("failed")
                  ? "#dc2626"
                  : "#15803d",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#ffffff",
    borderRadius: "24px",
    padding: "40px 30px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  logo: {
    fontSize: "50px",
    marginBottom: "15px",
  },

  title: {
    margin: 0,
    color: "#111827",
    fontSize: "30px",
    fontWeight: "700",
  },

  subtitle: {
    color: "#6b7280",
    fontSize: "14px",
    marginTop: "10px",
    marginBottom: "25px",
  },

  select: {
    width: "100%",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    marginBottom: "15px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff",
  },

  input: {
    width: "100%",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    marginBottom: "20px",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "15px",
    border: "none",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg,#4f46e5,#7c3aed)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  messageBox: {
    marginTop: "20px",
    padding: "14px",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "14px",
  },
};

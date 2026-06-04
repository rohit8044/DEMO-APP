import { useState } from "react";
import axios from "axios";

export default function Manage_Apk_Users() {
  const [phone, setPhone] = useState("");
  const [stateName, setStateName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    try {
      if (!stateName) {
        setMessage("Please select a state");
        return;
      }

      if (phone.length !== 10) {
        setMessage("Please enter a valid 10 digit mobile number");
        return;
      }

      setLoading(true);
      setMessage("");

      const fullPhone = `+91${phone}`;

      const res = await axios.post(
        "https://backend-api-2-qep2.onrender.com/SendOTP",
        {
          phone: fullPhone,
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
          Select your state and enter mobile number
        </p>

        <select
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
          style={styles.select}
        >
          <option value="">Select State</option>

          <option value="Bihar">Bihar</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Delhi">Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Gujarat">Gujarat</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Haryana">Haryana</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Odisha">Odisha</option>
          <option value="Kerala">Kerala</option>
          <option value="Assam">Assam</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
        </select>

        <div style={styles.phoneContainer}>
          <div style={styles.countryCode}>+91</div>

          <input
            type="text"
            placeholder="9508606398"
            maxLength={10}
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
            style={styles.phoneInput}
          />
        </div>

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
              background: message
                .toLowerCase()
                .includes("failed")
                ? "#fee2e2"
                : "#dcfce7",
              color: message
                .toLowerCase()
                .includes("failed")
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
      "linear-gradient(135deg,#4f46e5,#7c3aed,#9333ea)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    borderRadius: "24px",
    padding: "40px 30px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  logo: {
    fontSize: "55px",
    marginBottom: "10px",
  },

  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: "10px",
    marginBottom: "25px",
    color: "#6b7280",
    fontSize: "14px",
  },

  select: {
    width: "100%",
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    fontSize: "15px",
    marginBottom: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  phoneContainer: {
    display: "flex",
    marginBottom: "20px",
  },

  countryCode: {
    width: "70px",
    border: "1px solid #d1d5db",
    borderRight: "none",
    borderRadius: "12px 0 0 12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f9fafb",
    fontWeight: "600",
    color: "#111827",
  },

  phoneInput: {
    flex: 1,
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "0 12px 12px 0",
    outline: "none",
    fontSize: "15px",
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

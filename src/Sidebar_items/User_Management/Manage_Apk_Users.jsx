import { useState } from "react";
import axios from "axios";

export default function Manage_Apk_Users() {
  const [phone, setPhone] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const states = [
    { state: "India", code: "+91" },
  { state: "United States", code: "+1" },
  { state: "Canada", code: "+1" },
  { state: "United Kingdom", code: "+44" },
  { state: "Australia", code: "+61" },
  { state: "Germany", code: "+49" },
  { state: "France", code: "+33" },
  { state: "Italy", code: "+39" },
  { state: "Spain", code: "+34" },
  { state: "Japan", code: "+81" },
  { state: "China", code: "+86" },
  { state: "Russia", code: "+7" },
  { state: "Brazil", code: "+55" },
  { state: "Mexico", code: "+52" },
  { state: "South Korea", code: "+82" },
  { state: "Singapore", code: "+65" },
  { state: "Malaysia", code: "+60" },
  { state: "Thailand", code: "+66" },
  { state: "UAE", code: "+971" },
  { state: "Saudi Arabia", code: "+966" },
  { state: "Pakistan", code: "+92" },
  { state: "Bangladesh", code: "+880" },
  { state: "Nepal", code: "+977" },
  { state: "Sri Lanka", code: "+94" },
  ];

  const handleStateChange = (e) => {
    const value = e.target.value;

    const selected = states.find(
      (item) => item.state === value 
    );

    setSelectedState(value);
    setCountryCode(selected?.code || "+91");
  };

  const sendOtp = async () => {
    try {
      if (!selectedState) {
        setMessage("Please select a state/country");
        return;
      }

      if (!phone) {
        setMessage("Please enter mobile number");
        return;
      }

      setLoading(true);
      setMessage("");

      const fullPhone = `${countryCode}${phone}`;

      const res = await axios.post(
        "https://backend-api-2-qep2.onrender.com/SendOTP",
        {
          phone: fullPhone,
          state: selectedState,
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "OTP Send Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo>📞</div>

        <h1 style={styles.title}>
          Phone Verification
        </h1>

        <p style={styles.subtitle}>
          Select state/country and enter your
          mobile number
        </p>

        <select
          value={selectedState}
          onChange={handleStateChange}
          style={styles.select}
        >
          <option value="">
            Select State / Country
          </option>

          {states.map((item) => (
            <option
              key={item.state}
              value={item.state}
            >
              {item.state}
            </option>
          ))}
        </select>

        <div style={styles.phoneContainer}>
          <div style={styles.countryCode}>
            {countryCode}
          </div>

          <input
            type="text"
            placeholder="9508606398"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/\D/g, "")
              )
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
          {loading
            ? "Sending OTP..."
            : "Send OTP"}
        </button>

        {message && (
          <div
            style={{
              ...styles.messageBox,
              background:
                message
                  .toLowerCase()
                  .includes("failed")
                  ? "#fee2e2"
                  : "#dcfce7",
              color:
                message
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
    boxShadow:
      "0 20px 50px rgba(0,0,0,0.15)",
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
    marginBottom: "15px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  phoneContainer: {
    display: "flex",
    marginBottom: "20px",
  },

  countryCode: {
    width: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #d1d5db",
    borderRight: "none",
    borderRadius: "12px 0 0 12px",
    background: "#f3f4f6",
    fontWeight: "600",
  },

  phoneInput: {
    flex: 1,
    padding: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "0 12px 12px 0",
    fontSize: "15px",
    outline: "none",
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

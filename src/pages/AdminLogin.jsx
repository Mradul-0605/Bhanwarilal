import { useState } from "react";

function AdminLogin() {

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {

        localStorage.setItem(
          "token",
          data.token
        );

        window.location.href =
          "/dashboard";

      } else {

        alert(
          data.message ||
          "Wrong Password"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Cannot connect to server"
      );

    }

  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 px-4">

    <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-700">
          Bhanwarilal
        </h1>

        <p className="text-gray-500 mt-2">
          Owner Dashboard Login
        </p>
      </div>

      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login()}
          className="w-full border rounded-xl px-4 py-3 pr-14 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-3 text-gray-500"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>

      </div>

      <button
        onClick={login}
        disabled={loading}
        className="w-full mt-5 bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-semibold"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

      <p className="text-center mt-6 text-sm text-gray-400">
        Authorized Access Only
      </p>

    </div>

  </div>
);
}

export default AdminLogin;
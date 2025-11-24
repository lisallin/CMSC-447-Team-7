export default function AdminLoginButton() {
  const handleAdminLogin = () => {
    // Redirect to Django admin login page
    window.location.href = 'http://127.0.0.1:8000/admin/login/?next=/admin/';
  };

  return (
    <div className="absolute top-0 right-0 p-4 z-50">
      <button
        onClick={handleAdminLogin}
        className="bg-yellow-200 hover:bg-yellow-300 hover:underline font-semibold px-6 py-2 rounded shadow-lg transition-colors inline-block"
      >
        Admin Login
      </button>
    </div>
  );
}
export default function AdminLoginButton() {
  const handleAdminLogin = () => {
    // Redirect to Django admin login page
    window.location.href = '/admin/login/';
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
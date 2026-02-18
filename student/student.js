// Student Module JavaScript
// This file contains additional student-specific functionality

// Check if student is logged in
function checkStudentAuth() {
  const studentName = sessionStorage.getItem("currentStudent");
  if (!studentName) {
    window.location.href = "student_login.html";
    return false;
  }
  return true;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function() {
  // Check authentication for dashboard
  if (window.location.pathname.includes("student_dashboard.html")) {
    checkStudentAuth();
  }
});

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    checkStudentAuth
  };
}

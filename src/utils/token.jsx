const token = localStorage.getItem("auth_token");

// Create headers with token
export const headers = {
  Authorization: `Bearer ${token}`,
};

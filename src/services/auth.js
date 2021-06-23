export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REQRES_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  localStorage.removeItem("auth.token");
};

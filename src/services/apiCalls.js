const rootUrl = "https://inkspire-dev-afgq.1.ie-1.fl0.io/api/";

export const loginMe = async (credentials) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  try {
    const response = await fetch(rootUrl + "auth/login", options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const registerMe = async (credentials) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  try {
    const response = await fetch(rootUrl + "auth/register", options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
};

export const getProfile = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(rootUrl + "users/profile", options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
};

export const updateProfile = async (token, profile) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  };

  try {
    const response = await fetch(rootUrl + "users/profile", options);

    const data = await response.json();
    console.log(data);
    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
};

export const getAppointments = async (token, filters) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(rootUrl + "appointments", options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
};

export const createAppointment = async (token, appointment) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(appointment),
  };

  try {
    const response = await fetch(rootUrl + "appointments", options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
}

export const deleteAppointment = async (token, appointmentId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(rootUrl + `appointments/${appointmentId}`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data.data;
  } catch (error) {
    return error;
  }
}
const rootUrl = "https://inkspire-dev-afgq.1.ie-1.fl0.io/api/"

export const loginMe = async (credentials) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }

  try {
    const response = await fetch(rootUrl + "auth/login", options)

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message)
    }
    console.log(data)
    return data
  } catch (error) {
    console.log("error1: " + error)
    return error
  }
}

export const registerMe = async (credentials) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }

  try {
    const response = await fetch(rootUrl + "auth/register", options)

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message)
    }

    return data.data
  } catch (error) {
    console.log("error1: " + error)
    return error
  }
}

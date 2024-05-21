const fetchFilterTodo = async (status, token) => {
  const response = await fetch(`/home/filter?status=${status}&token=${token}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "no-cors",
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const apiAddTodo = async (todoData, token) => {
  const response = await fetch(`/home/add-todo?token=${token}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "no-cors",
    },
    body: JSON.stringify(todoData),
  });

  const data = await response.json();
  // console.log(todoData);
  return data;
};

const apiDeleteTodo = async (todoId, token) => {
  const response = await fetch(`/home/delete-todo?todoId=${todoId}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "no-cors",
    },
  });
};

const apiUpdateTodo = async (todoData, token) => {
  const response = await fetch(`/home/update-todo?token=${token}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "no-cors",
    },
    body: JSON.stringify(todoData),
  });

  const data = await response.json();
  // console.log(todoData);
  return data;
};
const fetchAllTodos = async (token) => {
  const response = await fetch(`/home/get-all-todo?token=${token}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "no-cors",
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const apiLogin = async (email, password) => {
  const response = await fetch(
    `/auth/login?email=${email}&password=${password}`,
    {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    }
  );
  try {
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.jwtToken);
    localStorage.setItem("user-name", data.name);
    window.location.href = "/home";
  } catch {
    window.alert("Invalid Creds!!");
  }
};
const isExpired=async(token)=>{

  const response = await fetch(`/home/isTokenExpired?token=${token}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      mode: "no-cors",
    },
   
  });
  const data = await response.json();
  console.log(data);
  return data;
}
const apiSignup = async (user) => {
  const response = await fetch(`/auth/create-user`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify(user),
  });
  window.location.href = "/";
  
};
export {
  fetchFilterTodo,
  apiAddTodo,
  apiDeleteTodo,
  apiUpdateTodo,
  fetchAllTodos,
  apiLogin,
  apiSignup,
  isExpired
};

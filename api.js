export const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/api/users');
    return await response.json();
  };
  
  export const addUser = async (name, transport, alimentation, energie) => {
    await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, transport: Number(transport), alimentation: Number(alimentation), energie: Number(energie) }),
    });
  };
  
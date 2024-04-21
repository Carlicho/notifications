interface Notification {
    id: number;
    message: string;
  }
  
  interface User {
    id: number;
    name: string;
    notifications: Notification[];
  }
  
  // Simular una base de datos en memoria
  const users: User[] = [
    {
      id: 1,
      name: "Usuario 1",
      notifications: [
        { id: 1, message: "Notificación 1" },
        { id: 2, message: "Notificación 2" }
      ]
    },
    // Puedes agregar más usuarios aquí si es necesario
  ];
  
  export default users;
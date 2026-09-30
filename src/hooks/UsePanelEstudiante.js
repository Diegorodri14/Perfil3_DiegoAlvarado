import { useState, useEffect } from 'react';

// Datos de ejemplo - reemplaza con tu API real
const estudiantesData = [
  {
    id: 1,
    nombre: 'Diego Alvarado',
    grado: 'Desarrollo de Software 3° Grupo B',
    carnet: '2020032',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgQwT6mszEKjZ8UI-bi4GW0fq3CnRbQp8zXla8xNM3PKUzZ_k36h2c88&s=10',
  }
];

export default function UsePanelEstudiante() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const fetchEstudiantes = async () => {
    try {
      setLoading(true);
      // Simula una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEstudiantes(estudiantesData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    estudiantes,
    loading,
    error,
    refetch: fetchEstudiantes,
  };
}
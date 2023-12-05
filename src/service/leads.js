import axios from "axios";

export const getLeads = async () => {
    try {
      const response = await axios.get(`/sorrileads/dashboard/a179f8ef-3f6a-417d-b56b-55af685d304f/leads`);
      console.log(response);
      return response.data;
    } catch (error) {
        console.error('Erro ao obter leads:', error);
        throw error;
    }
  };
  
import axios from 'axios';
import queryString from 'query-string';
import { StaffInterface, StaffGetQueryInterface } from 'interfaces/staff';
import { GetQueryInterface } from '../../interfaces';

export const getStaff = async (query?: StaffGetQueryInterface) => {
  const response = await axios.get(`/api/staff${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStaff = async (staff: StaffInterface) => {
  const response = await axios.post('/api/staff', staff);
  return response.data;
};

export const updateStaffById = async (id: string, staff: StaffInterface) => {
  const response = await axios.put(`/api/staff/${id}`, staff);
  return response.data;
};

export const getStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/staff/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStaffById = async (id: string) => {
  const response = await axios.delete(`/api/staff/${id}`);
  return response.data;
};

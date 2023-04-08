import {AxiosResponse} from 'axios';
import axiosInstance from './helpers/http';

document.addEventListener('alpine:init', () => {
  Alpine.data('Create', () => ({
      createUser: async function() {
        try {
          const {data}: AxiosResponse = await axiosInstance.post('/user/create');
          console.log(data);
        } catch (e: any) {
          console.log(e);
        }
      }
  }))
})
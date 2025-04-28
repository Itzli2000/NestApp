import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('This is an error - Check logs');
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    const { data } = await this.axios.post<T>(url, body);
    return data;
  }

  async put<T>(url: string, body: any): Promise<T> {
    const { data } = await this.axios.put<T>(url, body);
    return data;
  }

  async delete<T>(url: string): Promise<T> {
    const { data } = await this.axios.delete<T>(url);
    return data;
  }
}


import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Interfaces para os tipos de dados
export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  description?: string;
}

export interface ApiStats {
  totalRequests: number;
  activeUsers: number;
  uptime: string;
  averageResponseTime: number;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    roles: string[];
  };
}

// Configuração base da API
const API_BASE_URL = 'https://api.exemplo.com';

// Simulação de dados para demonstração
const mockProducts: Product[] = [
  { id: 1, name: 'Smartphone Pro', price: 899.99, currency: 'USD', description: 'Último modelo com IA integrada' },
  { id: 2, name: 'Laptop Gamer', price: 1299.99, currency: 'USD', description: 'Performance máxima para jogos' },
  { id: 3, name: 'Fones Wireless', price: 199.99, currency: 'USD', description: 'Cancelamento de ruído ativo' },
];

const mockStats: ApiStats = {
  totalRequests: 45623,
  activeUsers: 847,
  uptime: '99.9%',
  averageResponseTime: 120
};

// Serviços da API
export class ApiService {
  private static async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    console.log(`API Request: ${endpoint}`, options);
    
    // Simulação de delay de rede
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000 + 500));
    
    // Simulação de resposta baseada no endpoint
    if (endpoint.includes('/products')) {
      return mockProducts as T;
    }
    
    if (endpoint.includes('/stats')) {
      return mockStats as T;
    }
    
    if (endpoint.includes('/auth/login')) {
      return {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        user: {
          id: 1,
          username: 'admin',
          email: 'admin@exemplo.com',
          roles: ['ADMIN', 'USER']
        }
      } as T;
    }
    
    throw new Error(`Endpoint ${endpoint} não implementado`);
  }

  static async getProducts(currency?: string): Promise<Product[]> {
    const endpoint = currency ? `/api/v1/products?currency=${currency}` : '/api/v1/products';
    return this.request<Product[]>(endpoint);
  }

  static async getProductById(id: number): Promise<Product> {
    return this.request<Product>(`/api/v2/products/${id}`);
  }

  static async getApiStats(): Promise<ApiStats> {
    return this.request<ApiStats>('/api/stats');
  }

  static async login(username: string, password: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  }

  static async getCurrencyRates(baseCurrency = 'USD'): Promise<any> {
    return this.request(`/api/currency/rates?base=${baseCurrency}`);
  }
}

// Hooks personalizados para React Query
export const useProducts = (currency?: string) => {
  return useQuery({
    queryKey: ['products', currency],
    queryFn: () => ApiService.getProducts(currency),
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => ApiService.getProductById(id),
    enabled: !!id,
  });
};

export const useApiStats = () => {
  return useQuery({
    queryKey: ['apiStats'],
    queryFn: () => ApiService.getApiStats(),
    refetchInterval: 30000, // Atualiza a cada 30 segundos
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      ApiService.login(username, password),
    onSuccess: (data) => {
      // Salva o token no localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Invalida queries relacionadas à autenticação
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

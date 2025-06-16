
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, DollarSign, RefreshCw } from "lucide-react";
import { useProducts } from '@/services/apiService';
import { toast } from "sonner";

export const ProductManager = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const { data: products, isLoading, error, refetch } = useProducts(selectedCurrency);

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    toast.success(`Moeda alterada para ${currency}`);
  };

  const handleRefresh = () => {
    refetch();
    toast.success('Produtos atualizados');
  };

  if (error) {
    return (
      <Card className="p-6 bg-red-50 border-red-200">
        <p className="text-red-600">Erro ao carregar produtos: {error.message}</p>
        <Button onClick={handleRefresh} className="mt-4">
          Tentar Novamente
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gerenciador de Produtos</h2>
        <div className="flex gap-3">
          <Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="BRL">BRL</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {isLoading ? (
        <Card className="p-8 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Carregando produtos...</p>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <Badge variant="outline">{product.currency}</Badge>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-xl font-bold text-gray-800">
                    {product.price.toFixed(2)}
                  </span>
                </div>
                <Button size="sm">
                  Ver Detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

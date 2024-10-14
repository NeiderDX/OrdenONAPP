// mesa.model.ts
export interface Pedido {
    categoria: string;
    item: string;
    cantidad: number;
  }
  
  export interface Mesa {
    id: number;
    nombre: string;
    ocupada: boolean;
    personas: number;
    pedido: Pedido[];
  }
  
export interface Products {
  title: string;
  id: number;
  image: string;
  price: number;
  thumbnails: string[];
  numeroCuotas: number;
  precioCuotas: number;
  precioAnterior?: number;
  descuento?: number;
  unidadesDisponibles: number;
  color: string;
  mercadoPuntos: number;
  idCategory: string;
  name: string;
  description: string;
}

"use client";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button"; // Ajusta la ruta si es necesario
import Link from "next/link";

export const columns = [
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
    cell: ({ getValue }) => {
      const rawDate = getValue();
      if (!rawDate) return "Sin fecha";

      const date = new Date(rawDate);
      return new Intl.DateTimeFormat("es-VE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    },
  },
  {
    accessorKey: "id",
    header: "N Orden",
  },
  {
    accessorKey: "isPaid",
    header: "Pagado",
    cell: ({ row }) => {
      const isPaid = row.original.isPaid;

      return isPaid ? (
        <span className="text-green-600 font-semibold">Pagado</span>
      ) : (
        <button className="bg-red-100 text-red-500 px-2 py-1 rounded font-semibold">
          No pagado
        </button>
      );
    },
  },
  {
    accessorKey: "isDelivered",
    header: "Status",
    cell: ({ row }) => {
      const isDelivered = row.original.isDelivered;

      return isDelivered ? (
        <span className="text-green-600 font-semibold">Entregado</span>
      ) : (
        <button className="bg-black text-white px-2 py-1 rounded">
          No entregado
        </button>
      );
    },
  },
  {
    header: "Usuario",
    accessorFn: (row) => row.user?.name ?? "Sin nombre",
    id: "userName",
  },
  {
    header: "Correo",
    accessorFn: (row) => row.user?.email ?? "Sin correo",
    id: "Email",
  },
  {
    header: "Telefono",
    accessorFn: (row) => row.user?.phoneNumber ?? "Sin teléfono",
    id: "Telefono",
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
  },
  {
    id: "actions",
    header: "Detalles",
    cell: ({ row }) => {
      const orderId = row.original.id;

      return (
        <Link href={`/orders/${orderId}`}>
          <Button variant="ghost" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        </Link>
      );
    },
  },
];

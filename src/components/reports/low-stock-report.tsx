import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { INVENTORY_ITEMS } from "@/lib/data"
import { Badge } from "../ui/badge"

export function LowStockReport() {
  const lowStockItems = INVENTORY_ITEMS.filter(
    (item) => item.quantity < item.minStock
  )

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Current Stock</TableHead>
          <TableHead className="text-right">Min. Stock</TableHead>
          <TableHead className="text-right">Deficit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lowStockItems.length > 0 ? (
          lowStockItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-mono text-xs">{item.sku}</TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-right">{item.quantity}</TableCell>
              <TableCell className="text-right">{item.minStock}</TableCell>
              <TableCell className="text-right font-medium text-destructive">
                {item.quantity - item.minStock}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center h-24">
              No items are low on stock.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

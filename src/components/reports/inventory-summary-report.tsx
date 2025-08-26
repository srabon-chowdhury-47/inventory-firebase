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

export function InventorySummaryReport() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
           <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {INVENTORY_ITEMS.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-mono text-xs">{item.sku}</TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>
              <Badge variant="secondary">{item.category}</Badge>
            </TableCell>
            <TableCell className="text-right">{item.quantity}</TableCell>
            <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
            <TableCell className="text-right font-medium">${(item.quantity * item.price).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

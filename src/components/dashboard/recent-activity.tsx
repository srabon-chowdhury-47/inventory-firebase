import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          A log of the most recent inventory updates.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Quantum Laptop</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  QL-2024-A1
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  +5 units
                </Badge>
              </TableCell>
              <TableCell>2 min ago</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Aether Keyboard</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  AMK-RGB-01
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-red-600 border-red-600">
                  -2 units (Sale)
                </Badge>
              </TableCell>
              <TableCell>1 hour ago</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Orion Power Bank</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  OPB-20K-C
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  +50 units
                </Badge>
              </TableCell>
              <TableCell>3 hours ago</TableCell>
            </TableRow>
             <TableRow>
              <TableCell>
                <div className="font-medium">Aether Keyboard</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  AMK-RGB-01
                </div>
              </TableCell>
              <TableCell>
                 <Badge variant="outline" className="text-orange-500 border-orange-500">
                  Stock Low
                </Badge>
              </TableCell>
              <TableCell>1 day ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

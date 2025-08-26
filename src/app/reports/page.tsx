import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InventorySummaryReport } from "@/components/reports/inventory-summary-report"
import { LowStockReport } from "@/components/reports/low-stock-report"
import { Button } from "@/components/ui/button"
import { File } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-4">
        <Tabs defaultValue="inventory-summary" className="grid gap-4">
         <div className="flex items-center gap-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Reports
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                Discard
                </Button>
                <Button size="sm">Save</Button>
            </div>
            </div>
          <TabsList>
            <TabsTrigger value="inventory-summary">Inventory Summary</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="sales-history">Sales History</TabsTrigger>
          </TabsList>
          <TabsContent value="inventory-summary">
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Inventory Summary</CardTitle>
                <CardDescription>
                  A complete overview of all your items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InventorySummaryReport />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="low-stock">
             <Card>
              <CardHeader className="px-7">
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>
                  Items that have fallen below their minimum stock threshold.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LowStockReport />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

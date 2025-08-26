"use client"

import { useState } from "react"
import { Wand2 } from "lucide-react"

import { suggestStockLevels } from "@/ai/flows/suggest-stock-levels"
import type { SuggestStockLevelsOutput } from "@/ai/flows/suggest-stock-levels"
import type { InventoryItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "../ui/skeleton"

export function AiSuggestion({ item }: { item: InventoryItem }) {
  const [suggestion, setSuggestion] = useState<SuggestStockLevelsOutput | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetSuggestion = async () => {
    setIsLoading(true)
    setError(null)
    setSuggestion(null)
    try {
      const historicalSalesData = JSON.stringify(
        item.salesData || [
          { month: "Jan", sales: Math.floor(Math.random() * 50) + 20 },
          { month: "Feb", sales: Math.floor(Math.random() * 50) + 25 },
          { month: "Mar", sales: Math.floor(Math.random() * 50) + 30 },
          { month: "Apr", sales: Math.floor(Math.random() * 50) + 35 },
          { month: "May", sales: Math.floor(Math.random() * 50) + 40 },
          { month: "Jun", sales: Math.floor(Math.random() * 50) + 45 },
        ]
      )
      const result = await suggestStockLevels({
        itemId: item.id,
        currentStockLevel: item.quantity,
        historicalSalesData,
      })
      setSuggestion(result)
    } catch (e) {
      setError("Failed to get AI suggestion. Please try again.")
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="col-span-4">
      <div className="flex justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={handleGetSuggestion}
          disabled={isLoading}
        >
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? "Analyzing..." : "Get AI Suggestion"}
        </Button>
      </div>

      {isLoading && (
         <Alert className="mt-4">
             <Wand2 className="h-4 w-4" />
            <AlertTitle>AI is analyzing data...</AlertTitle>
            <AlertDescription>
                <Skeleton className="h-4 w-3/4 mt-2" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {suggestion && (
        <Alert className="mt-4 border-primary/50">
          <Wand2 className="h-4 w-4" />
          <AlertTitle className="flex items-center gap-2">
            AI Stock Suggestion:{" "}
            <span className="font-bold text-primary text-lg">
              {suggestion.optimalStockLevel} units
            </span>
          </AlertTitle>
          <AlertDescription>{suggestion.reasoning}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

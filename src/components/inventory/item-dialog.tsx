"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { InventoryItem } from "@/lib/types"
import { AiSuggestion } from "./ai-suggestion"
import { useEffect, useState } from "react"

interface ItemDialogProps {
  isOpen: boolean
  onClose: () => void
  item: InventoryItem | null
}

export function ItemDialog({ isOpen, onClose, item }: ItemDialogProps) {
  const [name, setName] = useState('')
  // Add other form field states here

  useEffect(() => {
    if (item) {
      setName(item.name);
      // set other states
    } else {
      setName('');
      // reset other states
    }
  }, [item, isOpen]);
  
  const title = item ? "Edit Item" : "Add New Item"
  const description = item
    ? "Update the details of your existing inventory item."
    : "Add a new item to your inventory."

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              SKU
            </Label>
            <Input id="sku" defaultValue={item?.sku} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right mt-2">
              Description
            </Label>
            <Textarea id="description" defaultValue={item?.description} className="col-span-3" />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input id="quantity" type="number" defaultValue={item?.quantity} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="minStock" className="text-right">
              Min. Stock
            </Label>
            <Input id="minStock" type="number" defaultValue={item?.minStock} className="col-span-3" />
          </div>
          {item && <AiSuggestion item={item} />}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { Location } from "@/app/generated/prisma"
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useId } from "react"

interface SortableItineraryProps{
    locations: Location[]
    tripId: string
}

export default function SortableItinerary({locations, tripId}: SortableItineraryProps){
    const id = useId();
    const handleDragEnd = async (event: DragEndEvent) => {
        
    }

    return <DndContext id={id} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

    </DndContext>
}
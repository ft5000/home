import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable
} from "@dnd-kit/sortable";

import { add, CSS } from "@dnd-kit/utilities";
import './dragdrop.css';

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
    zIndex: isDragging ? 999 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="dd-item">
      {children}
    </div>
  );
}

const DragDrop = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const [items, setItems] = useState(childrenArray.map((_, idx) => idx));

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    var isMobile = window.matchMedia("(max-width: 768px)").matches;
    var sortingStrategy = isMobile
        ? undefined
        : horizontalListSortingStrategy;

    addEventListener("resize", () => {
        isMobile = window.matchMedia("(max-width: 768px)").matches;
        sortingStrategy = isMobile ? undefined : horizontalListSortingStrategy;
    });

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

  return (
    <DndContext 
      sensors={sensors} 
      collisionDetection={closestCenter} 
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={sortingStrategy}>
        <div className="dd-container">
          {items.map((id) => (
            <SortableItem key={id} id={id}>
              {childrenArray[id]}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragDrop;

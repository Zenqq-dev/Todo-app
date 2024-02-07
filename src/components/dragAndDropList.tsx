import React, { useContext } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import Item from "./item";
import TodoContext from "./context/TodoContext";

type Props = {
  handleDragEnd: (dropItem: DropResult) => void;
};

export default function DragAndDropList({ handleDragEnd }: Props) {
  const { todo } = useContext(TodoContext);
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable'>
        {(provided) => (
          <div
            className='mt-5 mb-30 droppable'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {todo.map((t, index) => {
              return (
                <Draggable
                  key={t.id.toString()}
                  index={index}
                  draggableId={t.id.toString()}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Item
                        key={t.id}
                        item={t}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

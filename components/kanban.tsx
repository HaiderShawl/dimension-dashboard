import React, { useState, useEffect } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Card from './card';

import data from '../data/data'

const Kanban = () => {
	const [state, setState] = useState(data)
	const [winReady, setwinReady] = useState(false);

	useEffect(() => {
		setwinReady(true);
	}, []);

	function onDragEnd(result: any) {
		const { destination, source, draggableId } = result;

    if (!destination) {
			console.log(result)
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId as keyof object];
    const finish = state.columns[destination.droppableId as keyof object];

    if (start === finish) {
      const newTaskIds = Array.from(start['taskIds']);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds : newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start['taskIds']);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish['taskIds']);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);		
		console.log(newState)
	};

  return (
		<DragDropContext
			onDragEnd={onDragEnd}
		>
			<div className="flex flex-row w-full h-full mt-[32px] mb-[264px] overflow-scroll">
				<div className="flex-none flex-col basis-1/3 ml-[26px] items-start justify-start gap-[24px] text-gray-1800">
					<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
						<div className="self-stretch flex flex-row items-center justify-between">
							<div className="flex flex-row items-center justify-start gap-[12px]">
								<div className="flex flex-row items-start justify-start gap-[8px]">
									<img
										className="relative w-[17.5px] h-[17.5px] shrink-0"
										alt=""
										src="../ellipse-28.svg"
									/>
									<b className="relative tracking-[0.2px] leading-[20px] inline-block">
										TODO
									</b>
								</div>
								<div className="rounded-[8px] bg-gray-100 [border:1px_solid_#eaedf0] box-border flex flex-col p-[2px_4px] items-start justify-start text-center text-base">
									<b className="relative tracking-[0.2px] leading-[16px] inline-block w-[20px]">
										{state.columns['column-1'].taskIds.length}
									</b>
								</div>
							</div>
							<div className="flex flex-row items-start justify-start gap-[4px]">
								<img
									className="relative w-[20px] h-[20px] shrink-0"
									alt=""
									src="../vuesaxoutlineadd.svg"
								/>
								<img
									className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
									alt=""
									src="../heroiconssoliddotshorizontal.svg"
								/>
							</div>
						</div>
						<div className="self-stretch relative rounded-[16px] bg-gray-1800 mb-[24px] h-[2px] shrink-0" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base">
						{/* <div className="self-stretch relative rounded-[8px] bg-gray-100 h-[200px] shrink-0" /> */}

						{winReady?
						<Droppable droppableId="column-1">
							{(provided) => 
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className="min-h-[200px] min-w-[250px]"
									>
										{state.columns['column-1'].taskIds.map((taskId, index) => <Card task={state.tasks[taskId as keyof object]} index={index} key={state.tasks[taskId as keyof object]['id']} />)}
										{provided.placeholder}
									</div>
							}
						</Droppable>
						:null}
									
						

						<div 
							className="self-stretch rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border flex flex-col p-[8px_16px] items-center justify-center text-lg text-blue"
							onClick={() => {
								setState({
									tasks: {
										...state.tasks,
										[`task-${Object.keys(state.tasks).length + 1}`]: {
											id: `task-${Object.keys(state.tasks).length + 1}`,
											title: 'New Task'
										}
									},
									columns: {
										...state.columns,
										'column-1': {
											...state.columns['column-1'],
											taskIds: [
												...state.columns['column-1'].taskIds,
												`task-${Object.keys(state.tasks).length + 1}`
											]
										}
									}
								})
							}}
						>
							<div className="flex flex-row items-center justify-start gap-[8px]">
								<img
									className="relative w-[24px] h-[24px] shrink-0"
									alt=""
									src="../vuesaxoutlineadd1.svg"
								/>
								<b className="relative tracking-[0.2px] leading-[20px] inline-block">
									Add a Card
								</b>
							</div>
						</div>
							
					</div>
				</div>

				<div className="flex-none flex-col basis-1/3 ml-[36px] items-start justify-start gap-[24px] text-gray-1700">
					<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
						<div className="self-stretch flex flex-row items-center justify-between">
							<div className="flex flex-row items-center justify-start gap-[12px]">
								<div className="flex flex-row items-start justify-start gap-[8px]">
									<img
										className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
										alt=""
										src="../icon-project1.svg"
									/>
									<b className="relative tracking-[0.2px] leading-[20px] inline-block">
										IN PROGRESS
									</b>
								</div>
								<div className="rounded-[8px] bg-gray-100 [border:1px_solid_#eaedf0] box-border flex flex-col p-[2px_4px] items-start justify-start text-center text-base text-gray-1800">
									<b className="relative tracking-[0.2px] leading-[16px] inline-block w-[20px]">
										{state.columns['column-2'].taskIds.length}
									</b>
								</div>
							</div>
							<div className="flex flex-row items-start justify-start gap-[4px]">
								<img
									className="relative w-[20px] h-[20px] shrink-0"
									alt=""
									src="../vuesaxoutlineadd.svg"
								/>
								<img
									className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
									alt=""
									src="../heroiconssoliddotshorizontal.svg"
								/>
							</div>
						</div>
						<div className="self-stretch relative rounded-[16px] bg-blue mb-[24px]  h-[2px] shrink-0" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-gray-1800">
						
					{winReady?
						<Droppable droppableId="column-2">
							{(provided) => 
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className="min-h-[200px] min-w-[250px]"
									>
										{state.columns['column-2'].taskIds.map((taskId, index) => <Card task={state.tasks[taskId as keyof object]} index={index} key={state.tasks[taskId as keyof object]['id']} />)}
										{provided.placeholder}
									</div>
							}
						</Droppable>
						:null}


						<div 
							className="self-stretch rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border flex flex-col p-[8px_16px] items-center justify-center text-lg text-blue"
							onClick={() => {
								setState({
									tasks: {
										...state.tasks,
										[`task-${Object.keys(state.tasks).length + 1}`]: {
											id: `task-${Object.keys(state.tasks).length + 1}`,
											title: 'New Task'
										}
									},
									columns: {
										...state.columns,
										'column-2': {
											...state.columns['column-2'],
											taskIds: [
												...state.columns['column-2'].taskIds,
												`task-${Object.keys(state.tasks).length + 1}`
											]
										}
									}
								})
							}}
						>				
							<div className="self-stretch rounded-[8px] bg-white [border:1px_solid_#f2f5f7] box-border flex flex-col p-[8px_16px] items-center justify-center text-lg text-blue">
								<div className="flex flex-row items-center justify-start gap-[8px]">
									<img
										className="relative w-[24px] h-[24px] shrink-0"
										alt=""
										src="../vuesaxoutlineadd1.svg"
									/>
									<b className="relative tracking-[0.2px] leading-[20px] inline-block">
										Add a Card
									</b>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none flex-col basis-1/3 ml-[36px] pr-[36px] items-start justify-start gap-[24px] text-gray-1800">
					<div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
						<div className="self-stretch flex flex-row items-center justify-between">
							<div className="flex flex-row items-center justify-start gap-[12px]">
								<div className="flex flex-row items-start justify-start gap-[8px]">
									<img
										className="relative w-[20px] h-[20px] shrink-0"
										alt=""
										src="../icon-project.svg"
									/>
									<b className="relative tracking-[0.2px] leading-[20px] inline-block">
										COMPLETED
									</b>
								</div>
								<div className="rounded-[8px] bg-gray-100 [border:1px_solid_#eaedf0] box-border flex flex-col p-[2px_4px] items-start justify-start text-center text-base">
									<b className="relative tracking-[0.2px] leading-[16px] inline-block w-[20px]">
										{state.columns['column-3'].taskIds.length}
									</b>
								</div>
							</div>
							<div className="flex flex-row items-start justify-start gap-[4px]">
								<img
									className="relative w-[20px] h-[20px] shrink-0"
									alt=""
									src="../vuesaxoutlineadd.svg"
								/>
								<img
									className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
									alt=""
									src="../heroiconssoliddotshorizontal.svg"
								/>
							</div>
						</div>
						<div className="self-stretch relative rounded-[16px] bg-green mb-[24px]  h-[2px] shrink-0" />
					</div>
					<div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base">

					{winReady?
						<Droppable droppableId="column-3">
							{(provided) => 
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className="min-h-[200px] min-w-[250px]"
									>
										{state.columns['column-3'].taskIds.map((taskId, index) => <Card task={state.tasks[taskId as keyof object]} index={index} key={state.tasks[taskId as keyof object]['id']} />)}
										{provided.placeholder}
									</div>
							}
						</Droppable>
						:null}

						<div 
							className="self-stretch rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border flex flex-col p-[8px_16px] items-center justify-center text-lg text-blue"
							onClick={() => {
								setState({
									tasks: {
										...state.tasks,
										[`task-${Object.keys(state.tasks).length + 1}`]: {
											id: `task-${Object.keys(state.tasks).length + 1}`,
											title: 'New Task'
										}
									},
									columns: {
										...state.columns,
										'column-3': {
											...state.columns['column-3'],
											taskIds: [
												...state.columns['column-3'].taskIds,
												`task-${Object.keys(state.tasks).length + 1}`
											]
										}
									}
								})
							}}
						>
							<div className="self-stretch rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border flex flex-col p-[8px_16px] items-center justify-center text-lg text-blue">
								<div className="flex flex-row items-center justify-start gap-[8px]">
									<img
										className="relative w-[24px] h-[24px] shrink-0"
										alt=""
										src="../vuesaxoutlineadd1.svg"
									/>
									<b className="relative tracking-[0.2px] leading-[20px] inline-block">
										Add a Card
									</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DragDropContext>
  );
};

export default Kanban;

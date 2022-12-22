import { Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';


const Card = (props: any) => {
	const {task, index} = props
	const [isDragging, setIsDragging] = useState(false)

    return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => {
				setIsDragging(snapshot.isDragging)
				return (
					<div 
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					>
						<div className={"self-stretch mb-[20px] flex flex-col items-center justify-start " + (isDragging?"rotate-3":"")} >
							<div className="self-stretch rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border flex flex-col p-[7px_0px_12px] items-start justify-start gap-[12px] z-[1]">
							<div className="self-stretch flex flex-col p-[0px_16px] box-border items-start justify-start gap-[6px] text-xl">
								<div className="text-sm tracking-[0.6px] leading-[24px] text-gray-1100 inline-block w-[41px] h-[18px]">
									FLYTE-1
								</div>
									<b className="self-stretch relative tracking-[0.2px] leading-[24px] inline-block">
										{task['title']}
									</b>
									<div className="self-stretch relative text-base tracking-[0.2px] leading-[16px] text-gray-1100 inline-block">
										Create a consistent look and feel both on web and mobile
									</div>
								</div>
								<div className="self-stretch flex flex-row p-[0px_16px] box-border items-center justify-between text-indigo-100">
									<div className="flex flex-row items-center justify-start">
										<div className="rounded-[4px] bg-gray-500 flex flex-row p-[4px_8px] box-border items-center justify-start">
											<b className="relative tracking-[0.2px] leading-[16px] inline-block">
												UI Design
											</b>
										</div>
									</div>
									<div className="flex flex-row items-start justify-start text-center text-lg text-gray-1300">
										<img
											className="relative w-[30px] h-[30px] shrink-0 object-cover"
											alt=""
											src="../ellipse-6@2x.png"
										/>
										<img
											className="relative w-[30px] h-[30px] shrink-0 object-cover ml-[-12px]"
											alt=""
											src="../ellipse-33@2x.png"
										/>
										<img
											className="relative w-[30px] h-[30px] shrink-0 object-cover ml-[-12px]"
											alt=""
											src="../ellipse-3@2x.png"
										/>
										<div className="relative w-[30px] h-[30px] shrink-0 ml-[-12px]">
											<img
												className="absolute top-[0px] left-[0px] w-[30px] h-[30px]"
												alt=""
												src="../ellipse-72.svg"
											/>
											<div className="absolute top-[5px] left-[5px] leading-[20px] flex items-center justify-center w-[20px] h-[20px]">
												3+
											</div>
										</div>
									</div>
								</div>
								<div className="self-stretch relative border-t-[1px_solid_#eaedf0] box-border h-[1px] shrink-0" />
								<div className="self-stretch flex flex-row p-[0px_8px] box-border items-center justify-between text-gray-1000">
									<div className="flex flex-row items-start justify-start gap-[8px]">
										<div className="flex flex-row items-center justify-start gap-[4px]">
											<img
												className="relative w-[16px] h-[16px] shrink-0"
												alt=""
												src="../vuesaxoutlinemessage4.svg"
											/>
											<div className="relative tracking-[0.2px] leading-[16px] font-medium inline-block">
												12
											</div>
										</div>
										<div className="flex flex-row items-center justify-start gap-[4px]">
											<img
												className="relative w-[16px] h-[16px] shrink-0"
												alt=""
												src="../vuesaxoutlinetickcircle1.svg"
											/>
											<div className="relative tracking-[0.2px] leading-[16px] font-medium inline-block">
												4/8
											</div>
										</div>
									</div>
									<div className="flex flex-row items-start justify-start gap-[4px]">
										<img
											className="relative w-[16px] h-[16px] shrink-0"
											alt=""
											src="../vuesaxoutlinecalendar2.svg"
										/>
										<div className="relative tracking-[0.2px] leading-[16px] font-medium inline-block">
											May 20
										</div>
									</div>
								</div>
							</div>
							<div className="relative rounded-[8px] bg-white [border:1px_solid_#eaedf0] box-border w-[236px] h-[74px] shrink-0 z-[0] mt-[-70px]" />
						</div>
					</div>
				)
			}}
		</Draggable>
  );
};

export default Card;

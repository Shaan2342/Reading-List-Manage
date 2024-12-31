/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskT } from "../../types/index.tsx";

interface TaskProps {
	task: TaskT;
	provided: any;
}

const Task = ({ task, provided }: TaskProps) => {
	const { title, description, bookName, authorName, pageNumbers, image, alt, tags } = task;

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="w-full cursor-grab bg-[#fff] flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4"
		>
			{image && alt && (
				<img
					src={image}
					alt={alt}
					className="w-full h-[170px] rounded-lg"
				/>
			)}
			<div className="flex items-center gap-2">
				{tags.map((tag) => (
					<span
						key={tag.title}
						className="px-[10px] py-[2px] text-[13px] font-medium rounded-md"
						style={{ backgroundColor: tag.bg, color: tag.text }}
					>
						{tag.title}
					</span>
				))}
			</div>
			<div className="w-full flex items-start flex-col gap-0">
				<span className="text-[15.5px] font-medium text-[#555]">{title}</span>
				<span className="text-[13.5px] text-gray-500">{description}</span>
			</div>
			<div className="w-full border border-dashed"></div>
			<div className="w-full flex flex-col gap-2 p-3 bg-gray-50 rounded-lg">
				<div className="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385V4.804zM10.5 15.385A7.969 7.969 0 0115.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0015.5 4c-1.669 0-3.218.51-4.5 1.385v10zM5.5 3c-1.287 0-2.49.322-3.5.887V18.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V3.887c-1.01-.565-2.213-.887-3.5-.887-1.791 0-3.43.744-4.5 1.957C8.93 3.744 7.291 3 5.5 3z" />
					</svg>
					<span className="text-sm font-medium text-gray-700">{bookName}</span>
				</div>
				<div className="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
					</svg>
					<span className="text-sm text-gray-600">by {authorName}</span>
				</div>
				<div className="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385V4.804zM10.5 15.385A7.969 7.969 0 0115.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0015.5 4c-1.669 0-3.218.51-4.5 1.385v10zM5.5 3c-1.287 0-2.49.322-3.5.887V18.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V3.887c-1.01-.565-2.213-.887-3.5-.887-1.791 0-3.43.744-4.5 1.957C8.93 3.744 7.291 3 5.5 3z" />
					</svg>
					<span className="text-sm text-gray-600">{pageNumbers} pages</span>
				</div>
			</div>
		</div>
	);
};

export default Task;
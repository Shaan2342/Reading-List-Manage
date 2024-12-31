import {
	BsChevronDown,
	BsBell,
	BsPersonCircle,
	BsSearch,
	BsGear,
	BsShare
} from "react-icons/bs";

import { useState } from "react";
import Analytics from "../Analytics";
import { Board } from "../../data/board";

const Navbar = () => {
  const [showAnalytics, setShowAnalytics] = useState(false);
	return (
		<>
			<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
			<div className="flex items-center gap-3 cursor-pointer">
				<BsPersonCircle className="text-orange-400" size={28} />
				<span className="text-orange-400 font-semibold md:text-lg text-sm whitespace-nowrap">
					Board Name
				</span>
				<BsChevronDown className="text-orange-400" size={16} />
			</div>
			<div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
				<BsSearch className="text-gray-500" />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-gray-100 outline-none text-[15px]"
				/>
			</div>
			<div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<BsShare className="text-gray-700" />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<BsGear className="text-gray-700" />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<BsBell className="text-gray-700" />
				</div>
				<button
					onClick={() => setShowAnalytics(!showAnalytics)}
					className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
				>
					Analytics
				</button>
			</div>
		</div>
    {showAnalytics && <Analytics columns={{
      backlog: { name: 'Backlog', items: Board.backlog.items },
      pending: { name: 'Pending', items: Board.pending.items },
      todo: { name: 'To Do', items: Board.todo.items },
      doing: { name: 'Doing', items: Board.doing.items },
      done: { name: 'Done', items: Board.done.items }
    }} />}

	</>
	)

}
	
	

export default Navbar;
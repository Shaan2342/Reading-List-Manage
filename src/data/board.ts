import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/task.jpg";
import taskImage2 from "../assets/task2.jpg";
import taskImage3 from "../assets/task3.jpg";
import { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors.ts";

export const Board: Columns = {
	backlog: {
		name: "Backlog",
		items: [
			{
				id: uuidv4(),
				title: "To Kill a Mockingbird",
				description: "A classic novel about racial injustice",
				bookName: "To Kill a Mockingbird",
				authorName: "Harper Lee",
				pageNumbers: "281",
				image: taskImage2,
				alt: "book cover",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "1984",
				description: "Dystopian novel about totalitarianism",
				bookName: "1984",
				authorName: "George Orwell",
				pageNumbers: "328",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	pending: {
		name: "Pending",
		items: [
			{
				id: uuidv4(),
				title: "The Great Gatsby",
				description: "Novel about the American Dream",
				bookName: "The Great Gatsby",
				authorName: "F. Scott Fitzgerald",
				pageNumbers: "180",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Pride and Prejudice",
				description: "Romantic novel of manners",
				bookName: "Pride and Prejudice",
				authorName: "Jane Austen",
				pageNumbers: "279",
				image: taskImage,
				alt: "book cover",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "The Catcher in the Rye",
				description: "Coming-of-age novel",
				bookName: "The Catcher in the Rye",
				authorName: "J.D. Salinger",
				pageNumbers: "234",
				image: taskImage3,
				alt: "book cover",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	doing: {
		name: "Doing",
		items: [
			{
				id: uuidv4(),
				title: "Brave New World",
				description: "Dystopian novel about technological society",
				bookName: "Brave New World",
				authorName: "Aldous Huxley",
				pageNumbers: "311",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "The Lord of the Rings",
				description: "Epic fantasy novel",
				bookName: "The Lord of the Rings",
				authorName: "J.R.R. Tolkien",
				pageNumbers: "1178",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	done: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "The Hobbit",
				description: "Fantasy novel and prequel to LOTR",
				bookName: "The Hobbit",
				authorName: "J.R.R. Tolkien",
				pageNumbers: "310",
				image: taskImage,
				alt: "book cover",
				tags: [
					{ title: "Test", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
};
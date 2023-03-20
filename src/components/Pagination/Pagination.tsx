import { useState, useEffect } from 'react';
import './style.css';

interface PaginationProps {
	itemTotal: number;
	limit: number;
	currentPage: number;
	setPage: (page: number) => void;
}

export const Pagination = ({
	itemTotal,
	limit,
	currentPage,
	setPage,
}: PaginationProps) => {
	const totalPage = Math.ceil(itemTotal / limit);
	const startPage = 1;
	const [otherPages, setOtherPages] = useState<number[]>([]);

	useEffect(() => {
		setOtherPages((prevState) => {
			let newList: number[] = [];
			if (currentPage == totalPage || currentPage == startPage) {
				for (let i = 1; i < 4; i++) {
					newList =
						currentPage == totalPage
							? [currentPage - i + 1, ...newList]
							: [...newList, currentPage + i - 1];
					if (i == totalPage) {
						break;
					}
				}
				return newList;
			}
			return [currentPage - 1, currentPage, currentPage + 1];
		});
	}, [currentPage]);

	return (
		<ul className='pagination'>
			<li>
				<button
					disabled={currentPage == startPage}
					className='item'
					onClick={() => setPage(currentPage - 1)}>
					Previous
				</button>
			</li>
			{!otherPages.includes(startPage) && (
				<>
					<li>
						<button
							aria-checked={currentPage == startPage}
							className='item'
							onClick={() => setPage(startPage)}>
							{startPage}
						</button>
					</li>
					<li>
						<div className='ellipsis'>...</div>
					</li>
				</>
			)}
			{otherPages.map((item) => (
				<li key={item}>
					<button
						aria-checked={currentPage == item}
						className='item'
						onClick={() => setPage(item)}>
						{item}
					</button>
				</li>
			))}
			{!otherPages.includes(totalPage) && (
				<>
					<li>
						<div className='ellipsis'>...</div>
					</li>
					<li>
						<button
							aria-checked={currentPage == totalPage}
							className='item'
							onClick={() => setPage(totalPage)}>
							{totalPage}
						</button>
					</li>
				</>
			)}
			<li>
				<button
					disabled={currentPage == totalPage}
					className='item'
					onClick={() => setPage(currentPage + 1)}>
					Next
				</button>
			</li>
		</ul>
	);
};

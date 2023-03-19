import { ReactElement, useState } from 'react';
import { Header } from './components/Header';
import { Dropdown } from './components/Dropdown';
import { DropdownOptions } from './types';
import { SORT_OPTIONS, DEFAULT_SORT_OPTION } from './constants';
import './App.css';

const App = () => {
	const [sortValue, setSortValue] =
		useState<DropdownOptions>(DEFAULT_SORT_OPTION);

	return (
		<>
			<Header />
			<Dropdown
				label='Sort by:'
				currentValue={sortValue}
				handleChange={(value) => setSortValue(value)}
				items={SORT_OPTIONS}
			/>
		</>
	);
};

export default App;

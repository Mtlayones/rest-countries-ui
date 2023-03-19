import { useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { DropdownOptions } from '../../types';
import {
	SORT_OPTIONS,
	DEFAULT_SORT_OPTION,
	REGION_FILTER_OPTIONS,
	DEFAULT_REGION_FILTER_OPTIONS,
	AREA_FILTER_OPTIONS,
	DEFAULT_AREA_FILTER_OPTIONS,
} from '../../constants';
import './style.css';

export const Main = () => {
	const [sortValue, setSortValue] =
		useState<DropdownOptions>(DEFAULT_SORT_OPTION);
	const [regionFilter, setRegionFilter] = useState<DropdownOptions>(
		DEFAULT_REGION_FILTER_OPTIONS
	);
	const [areaFilter, setAreaFilter] = useState<DropdownOptions>(
		DEFAULT_AREA_FILTER_OPTIONS
	);

	return (
		<main>
			<div className='toolbar'>
				<div className='left'>
					<Dropdown
						label='Region:'
						currentValue={regionFilter}
						handleChange={(value) => setRegionFilter(value)}
						items={REGION_FILTER_OPTIONS}
					/>
					<Dropdown
						label='Area:'
						currentValue={areaFilter}
						handleChange={(value) => setAreaFilter(value)}
						items={AREA_FILTER_OPTIONS}
					/>
				</div>
				<Dropdown
					label='Sort by:'
					currentValue={sortValue}
					handleChange={(value) => setSortValue(value)}
					items={SORT_OPTIONS}
				/>
			</div>
		</main>
	);
};

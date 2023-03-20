import { useState, useEffect } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { Card } from '../../components/Card';
import { ItemCard } from './ItemCard';
import { DropdownOptions } from '../../types';
import { CountriesModel, CountryModel } from '../../data/models';
import {
	SORT_OPTIONS,
	DEFAULT_SORT_OPTION,
	REGION_FILTER_OPTIONS,
	DEFAULT_REGION_FILTER_OPTIONS,
	AREA_FILTER_OPTIONS,
	DEFAULT_AREA_FILTER_OPTIONS,
} from '../../constants';
import './style.css';
import restCountriesService from '../../data/restCountries';

export const Main = () => {
	const [sortValue, setSortValue] =
		useState<DropdownOptions>(DEFAULT_SORT_OPTION);
	const [regionFilter, setRegionFilter] = useState<DropdownOptions>(
		DEFAULT_REGION_FILTER_OPTIONS
	);
	const [areaFilter, setAreaFilter] = useState<DropdownOptions>(
		DEFAULT_AREA_FILTER_OPTIONS
	);
	const [countries, setCountries] = useState<CountriesModel | undefined>();
	const [lithuaniaData, setLithuaniaData] = useState<
		CountryModel | undefined
	>();

	useEffect(() => {
		restCountriesService
			.getAllData()
			.then((value) => setCountries(value as CountriesModel));
		restCountriesService
			.getLithuaniaData()
			.then((value) => setLithuaniaData(value as CountryModel));
	}, []);

	return (
		<main className='main-content'>
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
			<section>
				<ul className='card-group'>
					{countries
						?.getFilteredSorted(
							sortValue.value,
							regionFilter.value,
							areaFilter.value,
							lithuaniaData?.area
						)
						.map((item: CountryModel) => (
							<li key={item.name}>
								<ItemCard item={item} />
							</li>
						))}
				</ul>
			</section>
		</main>
	);
};

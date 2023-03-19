import { useState, useEffect, useRef } from 'react';
import { DropdownOptions } from '../../types';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './style.css';

interface DropDownProps {
	label: string;
	currentValue: DropdownOptions;
	items: readonly DropdownOptions[];
	handleChange: (value: DropdownOptions) => void;
}

export const Dropdown = ({
	label,
	items,
	currentValue,
	handleChange,
}: DropDownProps) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const ref = useRef(null);
	useOnClickOutside(ref, () => setIsClicked((prevState: boolean) => false));

	const handleChoose = (value: DropdownOptions) => {
		setIsClicked((prevState: boolean) => !prevState);
		handleChange(value);
	};

	return (
		<div className='dropdown' ref={ref}>
			<div className='visible'>
				<label className='label'>{label}</label>
				<button
					className='button'
					onClick={() =>
						setIsClicked((prevState: boolean) => !prevState)
					}>
					<currentValue.icon className='icon' />
					{currentValue.label}
				</button>
			</div>
			{isClicked && (
				<ul className='contents'>
					{items.map((value) => (
						<li
							key={value.value}
							onClick={() => handleChoose(value)}>
							<div className='option'>
								<value.icon className='icon' />
								{value.label}
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
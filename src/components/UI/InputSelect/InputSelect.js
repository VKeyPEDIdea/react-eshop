import React, { useState } from 'react';
import classes from './InputSelect.module.sass';

const InputSelect= props => {
	const {
		label,
		optionList,
		onChange,
		id
	} = props;

	const [isOpened, setIsOpened] = useState(false);
	const [selectValue, setSelectValue] = useState('');
	const [content, setContent] = useState('Не выбрано');

	const optionClickHandler = (content, value) => {
		setContent(content);
		setSelectValue(value);
	};

	const getOptionList = options => {
		return options.map(opt => {
			return <option
				key={opt.value}
				value={opt.value}
				onClick={() => optionClickHandler(opt.title, opt.value)}
				className={classes.option}>{opt.title}</option>;
		});
	};

	return(
		<div
			className={classes.inputSelect}
			onClick={() => setIsOpened(!isOpened)}>
			<label htmlFor="" className={classes.label}>{label}</label>
			<div className={classes.field}>{content}</div>
			<div className={classes.arrow}>
				<i className="material-icons"
					style={isOpened ? {transform: 'rotate(180deg)'} : null}>arrow_drop_down</i>
			</div>
			<select
				id={id}
				value={selectValue}
				className={classes.select}
				onChange={onChange}>
				{getOptionList(optionList)}
			</select>
		</div>
	);
}

export default InputSelect;
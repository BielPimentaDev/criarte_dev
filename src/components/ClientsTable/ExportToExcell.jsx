import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BsDownload } from 'react-icons/bs';
import { teste } from '../../assets';

export const ExportToExcel = ({ apiData, fileName }) => {
	
	const exportToCSV = (apiData, fileName) => {
		console.log(apiData);
		var wb = XLSX.utils.book_new()
		var ws = XLSX.utils.json_to_sheet(teste)
	
		XLSX.utils.book_append_sheet(wb, ws, 'teste')
		XLSX.writeFile(wb, 'MyExcel.xlsx')

	};

	return (
		
		<button
			className='back-button'
			onClick={() => exportToCSV(teste, fileName)}>
			<BsDownload size={25} />
		</button>
	);
};
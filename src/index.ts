import am1 from '@mmstudio/am000001';

export default function render(mm: am1, data: { [key: string]: unknown; }) {
	return new Promise<void>((res) => {
		Object.assign(mm.data, data);
		mm.page.setState({}, res);
	});
}

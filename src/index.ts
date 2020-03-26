import am1 from '@mmstudio/am000001';

export default function render(mm: am1, key: string, value: { [key: string]: unknown; }) {
	mm.set_data(key, value);
}

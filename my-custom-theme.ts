import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #009788
		'--color-primary-50': '217 239 237', // #d9efed
		'--color-primary-100': '204 234 231', // #cceae7
		'--color-primary-200': '191 229 225', // #bfe5e1
		'--color-primary-300': '153 213 207', // #99d5cf
		'--color-primary-400': '77 182 172', // #4db6ac
		'--color-primary-500': '0 151 136', // #009788
		'--color-primary-600': '0 136 122', // #00887a
		'--color-primary-700': '0 113 102', // #007166
		'--color-primary-800': '0 91 82', // #005b52
		'--color-primary-900': '0 74 67', // #004a43
		// secondary | #06cbb7
		'--color-secondary-50': '218 247 244', // #daf7f4
		'--color-secondary-100': '205 245 241', // #cdf5f1
		'--color-secondary-200': '193 242 237', // #c1f2ed
		'--color-secondary-300': '155 234 226', // #9beae2
		'--color-secondary-400': '81 219 205', // #51dbcd
		'--color-secondary-500': '6 203 183', // #06cbb7
		'--color-secondary-600': '5 183 165', // #05b7a5
		'--color-secondary-700': '5 152 137', // #059889
		'--color-secondary-800': '4 122 110', // #047a6e
		'--color-secondary-900': '3 99 90', // #03635a
		// tertiary | #009788
		'--color-tertiary-50': '217 239 237', // #d9efed
		'--color-tertiary-100': '204 234 231', // #cceae7
		'--color-tertiary-200': '191 229 225', // #bfe5e1
		'--color-tertiary-300': '153 213 207', // #99d5cf
		'--color-tertiary-400': '77 182 172', // #4db6ac
		'--color-tertiary-500': '0 151 136', // #009788
		'--color-tertiary-600': '0 136 122', // #00887a
		'--color-tertiary-700': '0 113 102', // #007166
		'--color-tertiary-800': '0 91 82', // #005b52
		'--color-tertiary-900': '0 74 67', // #004a43
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #ce1f1f
		'--color-error-50': '248 221 221', // #f8dddd
		'--color-error-100': '245 210 210', // #f5d2d2
		'--color-error-200': '243 199 199', // #f3c7c7
		'--color-error-300': '235 165 165', // #eba5a5
		'--color-error-400': '221 98 98', // #dd6262
		'--color-error-500': '206 31 31', // #ce1f1f
		'--color-error-600': '185 28 28', // #b91c1c
		'--color-error-700': '155 23 23', // #9b1717
		'--color-error-800': '124 19 19', // #7c1313
		'--color-error-900': '101 15 15', // #650f0f
		// surface | #343a40
		'--color-surface-50': '225 225 226', // #e1e1e2
		'--color-surface-100': '214 216 217', // #d6d8d9
		'--color-surface-200': '204 206 207', // #cccecf
		'--color-surface-300': '174 176 179', // #aeb0b3
		'--color-surface-400': '113 117 121', // #717579
		'--color-surface-500': '52 58 64', // #343a40
		'--color-surface-600': '47 52 58', // #2f343a
		'--color-surface-700': '39 44 48', // #272c30
		'--color-surface-800': '31 35 38', // #1f2326
		'--color-surface-900': '25 28 31' // #191c1f
	}
};

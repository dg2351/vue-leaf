export const formConf = {
	formRef: 'elForm',
	formModel: 'formData',
	size: 'medium',
	labelAlign: 'right',
	labelWidth: 4,
	formRules: 'rules',
	gutter: 15,
	disabled: false,
	span: 24,
	formBtns: true,
	hideRequiredMark: false,
}

export const inputComponents = [
	{
		label: '单行文本',
		tag: 'a-input',
		tagIcon: 'input',
		placeholder: '请输入',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		allowClear: true,
		addonBefore: '',
		addonAfter: '',
		prefix: '',
		suffix: '',
		maxLength: 50,
		readOnly: false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
	},
	{
		label: '多行文本',
		tag: 'a-input',
		tagIcon: 'textarea',
		type: 'textarea',
		placeholder: '请输入',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		autoSize: {
			minRows: 2,
			maxRows: 4
		},
		style: { width: '100%' },
		maxLength: 250,
		readOnly: false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
	},
	{
		label: '密码',
		tag: 'a-input',
		tagIcon: 'password',
		type: "password",
		placeholder: '请输入',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		allowClear: true,
		addonBefore: '',
		addonAfter: '',
		prefix: '',
		suffix: '',
		maxLength: 20,
		readOnly: false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
	},
	{
		label: '计数器',
		tag: 'a-input-number',
		tagIcon: 'number',
		placeholder: '',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		min: undefined,
		max: undefined,
		step: undefined,
		precision: undefined,
		'controls-position': '',
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
	}
]

export const selectComponents = [
	{
		label: '下拉选择',
		tag: 'a-select',
		tagIcon: 'select',
		placeholder: '请选择',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		allowClear: true,
		disabled: false,
		required: true,
		showSearch: false,
		multiple: false,
		options: [],
		regList: [],
		changeTag: true,
		dataType:"static",
		dataUrl:"",
		data:{
			label:"",value:""
		}
	},
	{
		label: '级联选择',
		tag: 'a-cascader',
		tagIcon: 'cascader',
		placeholder: '请选择',
		defaultValue: [],
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		props: {
			props: {
				multiple: false
			}
		},
		'show-all-levels': true,
		disabled: false,
		allowClear: true,
		showSearch: false,
		required: true,
		options: [{
			id: 1,
			value: 1,
			label: '选项1',
			children: [{
				id: 2,
				value: 2,
				label: '选项1-1'
			}]
		}],
		dataType: 'dynamic',
		dataUrl:"",
		labelKey: 'label',
		valueKey: 'value',
		childrenKey: 'children',
		separator: '/',
		regList: [],
		changeTag: true,
	},
	{
		label: '单选框组',
		tag: 'a-radio-group',
		tagIcon: 'radio',
		defaultValue: undefined,
		span: 24,
		labelWidth: 4,
		style: {},
		size: 'default',
		disabled: false,
		required: true,
		options: [],
		regList: [],
		changeTag: true,
		dataType:"static",
		dataUrl:"",
		data:{
			label:"",value:""
		}
	},
	{
		label: '多选框组',
		tag: 'a-checkbox-group',
		tagIcon: 'checkbox',
		defaultValue: [],
		span: 24,
		labelWidth: 4,
		style: {},
		optionType: 'default',
		border: false,
		size: 'medium',
		disabled: false,
		required: true,
		options: [{
			label: '选项一',
			value: 1
		}, {
			label: '选项二',
			value: 2
		}],
		regList: [],
		changeTag: true,
	},
	{
		label: '开关',
		tag: 'a-switch',
		tagIcon: 'switch',
		defaultValue: false,
		span: 24,
		labelWidth: 4,
		style: {},
		disabled: false,
		required: true,
		checkedChildren: '',
		unCheckedChildren: '',
		regList: [],
		changeTag: true,
	},
	{
		label: '滑块',
		tag: 'a-slider',
		tagIcon: 'slider',
		defaultValue: 0,
		span: 24,
		labelWidth: 4,
		disabled: false,
		required: true,
		min: 0,
		max: 100,
		step: 1,
		range: false,
		regList: [],
		changeTag: true,
	},
	{
		label: '时间选择',
		tag: 'a-time-picker',
		tagIcon: 'time',
		placeholder: '请选择',
		defaultValue: null,
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		disabled: false,
		inputReadOnly: true,
		allowClear: true,
		required: true,
		format: 'HH:mm:ss',
		valueFormat: 'HH:mm:ss',
		regList: [],
		changeTag: true,
	},
	{
		label: '日期选择',
		tag: 'a-date-picker',
		tagIcon: 'date',
		placeholder: '请选择',
		defaultValue: null,
		mode: 'date',
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		disabled: false,
		inputReadOnly: true,
		allowClear: true,
		required: true,
		format: 'YYYY-MM-DD',
		valueFormat: 'YYYY-MM-DD',
		regList: [],
		changeTag: true,
	},
	{
		label: '日期范围',
		tag: 'a-range-picker',
		tagIcon: 'range-picker',
		defaultValue: null,
		span: 24,
		labelWidth: 4,
		style: { width: '100%' },
		mode: ['date','date'],
		rangeMode: "date",
		separator: '至',
		// placeholder: ['开始日期','结束日期'],
		disabled: false,
		allowClear: true,
		required: true,
		format: 'YYYY-MM-DD',
		// valueFormat: 'YYYY-MM-DD',
		inputReadOnly: true,
		regList: [],
		changeTag: true,
	},
	{
		label: '评分',
		tag: 'a-rate',
		tagIcon: 'rate',
		defaultValue: 0,
		span: 24,
		labelWidth: 4,
		style: {},
		max: 5,
		'allow-half': false,
		'show-text': false,
		'show-score': false,
		disabled: false,
		required: true,
		regList: [],
		changeTag: true,
	},
	// {
	// 	label: '颜色选择',
	// 	tag: 'a-color-picker',
	// 	tagIcon: 'color',
	// 	defaultValue: null,
	// 	labelWidth: 4,
	// 	'show-alpha': false,
	// 	'color-format': '',
	// 	disabled: false,
	// 	required: true,
	// 	size: 'medium',
	// 	regList: [],
	// 	changeTag: true,
	// },
	{
		label: '上传',
		tag: 'a-upload',
		tagIcon: 'upload',
		action: 'https://jsonplaceholder.typicode.com/posts/',
		defaultValue: null,
		labelWidth: 4,
		disabled: false,
		required: true,
		accept: '',
		name: 'file',
		'auto-upload': true,
		showTip: false,
		buttonText: '点击上传',
		fileSize: 2,
		sizeUnit: 'MB',
		'list-type': 'text',
		multiple: false,
		regList: [],
		changeTag: true,
	}
]

export const layoutComponents = [
	{
		layout: 'rowFormItem',
		tagIcon: 'row',
		type: 'default',
		justify: 'start',
		align: 'top',
		label: '行容器',
		layoutTree: true,
		children: [],
	},
	{
		layout: 'colFormItem',
		label: '按钮',
		changeTag: true,
		labelWidth: 4,
		tag: 'a-button',
		tagIcon: 'button',
		span: 24,
		default: '按钮',
		type: 'primary',
		icon: 'a-icon-search',
		size: 'default',
		disabled: false,
	}
]

// 组件rule的触发方式，无触发方式的组件不生成rule
export const trigger = {
	'a-input': 'blur',
	'a-input-number': 'blur',
	'a-select': 'change',
	'a-radio-group': 'change',
	'a-checkbox-group': 'change',
	'a-cascader': 'change',
	'a-time-picker': 'change',
	'a-date-picker': 'change',
	'a-rate': 'change'
}

export const  drawingList = [
]

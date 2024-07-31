export const code_1 = '<ExampelShowCase\n' +
    '          :code="$doc.OverViewDoc.code_1"\n' +
    '>\n' +
    '   <span class="w-auto h-auto bg-red-950 flex text-white text-4 font-bold">\n' +
    '     这是一个 {{ $doc.OverViewDoc.overview_2[0] }}\n' +
    '   </span>\n' +
    '</ExampelShowCase>'
export const code_2 = '<TipComponent\n' +
    '   :title="$doc.OverViewDoc.tips_1.title"\n' +
    '   :sub-title="$doc.OverViewDoc.tips_1.subTitle"\n' +
    '   :default-tip="$doc.OverViewDoc.tips_1.tipsType"\n' +
    '   class="mb-4"\n' +
    '/>\n' +
    '<TipComponent\n' +
    '   :title="$doc.OverViewDoc.tips_1.title"\n' +
    '   :sub-title="$doc.OverViewDoc.tips_1.subTitle"\n' +
    '   :success-tip="$doc.OverViewDoc.tips_1.tipsType"\n' +
    '   class="mb-4"\n' +
    '/>\n' +
    '<TipComponent\n' +
    '   :title="$doc.OverViewDoc.tips_1.title"\n' +
    '   :sub-title="$doc.OverViewDoc.tips_1.subTitle"\n' +
    '   :warning-tip="$doc.OverViewDoc.tips_1.tipsType"\n' +
    '   class="mb-4"\n' +
    '/>\n' +
    '<TipComponent\n' +
    '   :title="$doc.OverViewDoc.tips_1.title"\n' +
    '   :sub-title="$doc.OverViewDoc.tips_1.subTitle"\n' +
    '   :danger-tip="$doc.OverViewDoc.tips_1.tipsType"\n' +
    '   class="mb-4"\n' +
    '/>'
export const code_3 = '<NoData\n' +
    '   :description="这是一个空白组件"' +
    '\n/>'
export const code_4 = '<DescriptionBlock\n' +
    '   :title="标题组件"\n' +
    '   :content="标题组件用于展示标题"\n' +
    '/>'
export const overview_1 = [
    'Overview 组件总览',
    '以下是 本管理系统模板 提供的所有组件。'
]
export const overview_2 = [
    '展示组件',
    '展示组件用于展示数据，不可编辑。'
]
export const overview_4 = [
    '标题组件',
    '标题组件用于展示标题。'
]
export const overview_3 = [
    '表单组件',
    '表单组件用于展示数据。'
]
export const tips_1 = {
    title: 'Tips 组件',
    subTitle: 'Tips 组件用于展示提示信息。Tips 组件具有多种状态',
    tipsType: true,
}
export const noData_1 = '这是一个空白组件'

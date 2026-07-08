/**
 * Markdown editor preview sample
 */

var textArea;
var srcArea;
var myCodeMirror;
var defaultRTE;
var splitObj;
var markdownConverter = ej.markdownconverter.MarkdownConverter;
var value = "# Welcome to the Syncfusion® EJ2 Markdown Editor\n\n" +
"The **Syncfusion Rich Text Editor** in **Markdown** mode delivers a lightweight, distraction-free editing experience with full Markdown syntax support — powered natively by Syncfusion’s own **MarkdownConverter**.\n\n" +
"Write beautiful documents faster using simple, readable Markdown syntax and see the formatted result instantly with live preview.\n\n" +
"### Why Choose Markdown Mode?\n\n" +
"- Clean, plain-text syntax that is easy to read and write — even in raw form\n" +
"- Input or modify text, apply formatting, and view the Markdown preview side-by-side using the splitter control.\n" +
"- Toolbar + keyboard shortcuts for rapid formatting\n" +
"- Easy to convert content to HTML or other formats\n" +
"- Ideal for documentation, notes, and developer-focused content\n" +
"- Reduces clutter and keeps the writing experience distraction-free\n\n" +
"### Supported Markdown Features in Action\n\n" +
"# Headings\n" +
"## Markdown Editor Demo\n" +
"### Create Clean, Structured Content\n" +
"#### Organize Sections Effortlessly\n" +
"##### Add Subheadings for Clarity\n" +
"###### Provide Notes or Additional Info\n\n" +
"Headings help structure your content, making it easier to read, scan, and organize information within the Markdown editor.\n\n" +
"#### Text Formatting\n" +
"**Bold text highlights important information.**\n\n" +
"*Markdown makes writing simple and clean.*\n\n" +
"**_You can also combine bold and italic for emphasis._**\n\n" +
"~~Use strikethrough to indicate removed or outdated content.~~\n\n" +
"`Inline code is perfect for short code snippets like commands or variables.`\n\n" +
"### Table\n" +
"Create simple tables to organize information clearly and quickly.\n\n" +
"| Feature | Description |\n" +
"|---------|-------------|\n" +
"| Markdown   | Lightweight, easy-to-read formatting syntax |\n" +
"| Preview    | Shows formatted output side-by-side |\n\n" +
"#### Lists\n\n" +
"**Unordered**\n" +
"- Explore the editor features\n" +
"- Add content with simple syntax\n" +
"    - Insert nested bullet points\n" +
"    - Organize topics hierarchically\n" +
"- Keep your notes clear and readable\n\n" +
"**Ordered**\n" +
"1. Start writing your content\n" +
"2. Apply Markdown formatting\n" +
"    1. Add sub-steps for detailed tasks\n" +
"    2. Improve clarity with structure\n" +
"3. Review and finalize your document\n\n" +
"**Task List**\n" +
"- [x] Completed task\n" +
"- [ ] Write documentation\n" +
"- [ ] Release new version\n\n" +
"#### Blockquotes\n\n" +
"> Markdown makes writing on the web beautiful and readable.\n" +
">\n" +
"> — John Gruber, Creator of Markdown\n\n" +
"#### Code Blocks\n" +
"Inline code: Use `npm install @syncfusion/ej2-richtexteditor`";

this.default = function () {
    splitObj = new ej.layouts.Splitter({
        height: '450px',
        resizing: onResizing,
        created: updateOrientation,
        width: '100%',
        paneSettings: [{
            resizable: true,
            size: '50%', min: '40%',
        }, { min: '40%' }],
    });
    splitObj.appendTo('#splitter-rte-markdown-preview');
    defaultRTE = new ej.richtexteditor.RichTextEditor({
        height: '100%',
        placeholder : "Enter your text here...",
        formatter: new ej.richtexteditor.MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.' } }),
        floatingToolbarOffset: 0,
        editorMode: 'Markdown',
        toolbarSettings: {
            type: 'Expand',
            enableFloating: false,
            items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable',
                '|', 'Undo', 'Redo'
            ]
        },
        saveInterval: 1, actionComplete: updateValue, change: onChange,
        showCharCount: true, maxLength: 5000, created: onCreate,
        value: value
    });
    defaultRTE.appendTo('#defaultRTE');

    function onChange() {
        updateValue();
    }
    function onResizing() {
        defaultRTE.refreshUI();
    }
    function onCreate() {
        textArea = defaultRTE.contentModule.getEditPanel();
        srcArea = document.querySelector('.source-code');
        updateValue();
    }
    function updateValue() {
        srcArea.innerHTML = markdownConverter.toHtml(defaultRTE.contentModule.getEditPanel().value, { lineBreak: true });
    }
    function updateOrientation() {
        if (ej.base.Browser.isDevice) {
            splitObj.orientation = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    }
};
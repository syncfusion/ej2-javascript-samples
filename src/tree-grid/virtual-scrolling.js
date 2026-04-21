this.default = function () {
    var statusTemplate = function (args) {
        var status = (args.Status || '').toString().toLowerCase();
        var cssClass = 'rg-badge-status-maintenance';
        if (status.indexOf('run') === 0)
            cssClass = 'rg-badge-status-running';
        else if (status.indexOf('stop') === 0)
            cssClass = 'rg-badge-status-stopped';
        else if (status.indexOf('degrad') === 0)
            cssClass = 'rg-badge-status-degraded';
        return '<div class="rg-badge ' + cssClass + '">' + (args.Status || '') + '</div>';
    };
    var priorityTemplate = function (args) {
        var priority = (args.Priority || '').toString().toLowerCase();
        var cssClass = 'rg-badge-priority-medium';
        var label = args.Priority || 'Medium';
        if (priority === 'low') {
            cssClass = 'rg-badge-priority-low';
        }
        else if (priority === 'critical') {
            cssClass = 'rg-badge-priority-critical';
        }
        else if (priority === 'high') {
            cssClass = 'rg-badge-priority-high';
        }
        return '<div class="rg-badge ' + cssClass + '">' + label + '</div>';
    };
    var complianceTemplate = function (args) {
        var value = Math.max(0, Math.min(100, parseInt(args.ComplianceScore || 0)));
        return '<div class="rg-compliance-wrapper">' +
            '<div class="rg-compliance"><i style="width:' + value + '%"></i></div>' +
            '<div class="rg-compliance-value">' + value + ' </div>' +
            '</div>';
    };
    var regionTemplate = function (args) {
        var region = args.Region || '';
        var flagSvg = '';
        if (region.indexOf('West US') >= 0 || region.indexOf('East US') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#B22234"/><rect y="0" width="20" height="2" fill="#fff"/><rect y="4" width="20" height="2" fill="#fff"/><rect y="8" width="20" height="2" fill="#fff"/><rect y="12" width="20" height="2" fill="#fff"/><rect width="8" height="8" fill="#3C3B6E"/></svg>';
        }
        else if (region.indexOf('EU West') >= 0 || region.indexOf('EU Central') >= 0 || region.indexOf('North Europe') >= 0 || region.indexOf('West Europe') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#003399"/><circle cx="10" cy="7" r="2" fill="#FFCC00"/><circle cx="13" cy="7" r="0.6" fill="#FFCC00"/><circle cx="7" cy="7" r="0.6" fill="#FFCC00"/><circle cx="10" cy="4" r="0.6" fill="#FFCC00"/><circle cx="10" cy="10" r="0.6" fill="#FFCC00"/></svg>';
        }
        else if (region.indexOf('Canada') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#fff"/><rect width="5" height="14" fill="#FF0000"/><rect x="15" width="5" height="14" fill="#FF0000"/><path d="M10,5 L10.5,7 L9,7.5 L10.5,8 L10,10 L11,8.5 L12,10 L11.5,8 L13,7.5 L11.5,7 L12,5 L11,6.5 Z" fill="#FF0000"/></svg>';
        }
        else if (region.indexOf('Australia') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#012169"/><rect width="8" height="6" fill="#012169"/><path d="M0,0 L8,6 M8,0 L0,6" stroke="#fff" stroke-width="1.2"/><path d="M4,0 L4,6 M0,3 L8,3" stroke="#fff" stroke-width="2"/><path d="M4,0 L4,6 M0,3 L8,3" stroke="#C8102E" stroke-width="1.2"/><circle cx="15" cy="10" r="1" fill="#fff"/><circle cx="13" cy="8" r="0.8" fill="#fff"/><circle cx="17" cy="8" r="0.8" fill="#fff"/></svg>';
        }
        else if (region.indexOf('Asia Pacific') >= 0 || region.indexOf('Southeast Asia') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#f97316"/><circle cx="10" cy="7" r="3" fill="#fff"/><text x="10" y="10" font-size="6" text-anchor="middle" fill="#f97316" font-weight="bold">AP</text></svg>';
        }
        else if (region.indexOf('South America') >= 0) {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#009739"/><path d="M10,1 L18,7 L10,13 L2,7 Z" fill="#FEDD00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>';
        }
        else {
            flagSvg = '<svg width="20" height="14" viewBox="0 0 20 14" style="border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2)"><rect width="20" height="14" fill="#6b7280"/><circle cx="10" cy="7" r="4" fill="none" stroke="#fff" stroke-width="0.8"/><path d="M10,3 Q12,7 10,11 M10,3 Q8,7 10,11 M6,7 L14,7" stroke="#fff" stroke-width="0.8" fill="none"/></svg>';
        }
        return '<div class="rg-region">' +
            '<span class="rg-region-flag">' + flagSvg + '</span>' +
            '<span class="rg-region-name">' + region + '</span>' +
            '</div>';
    };
    if (!Window.virtualScrollData) {
        if (typeof (window.VirtualdataSource) === 'function') {
            window.VirtualdataSource();
        }
    }
    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.virtualScrollData,
        enableVirtualization: true,
        enableVirtualMaskRow: true,
        clipMode: 'EllipsisWithTooltip',
        treeColumnIndex: 2,
        idMapping: 'TaskID',
        parentIdMapping: 'ParentID',
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            mode: 'Row',
            newRowPosition: 'Child'
        },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'],
        height: 400,
        rowHeight: 50,
        load: function (args) {
            if (treegrid.enableVirtualization) {
                args.enableSeamlessScrolling = true;
            }
        },
        columns: [
            {
                field: 'TaskID',
                headerText: 'ID',
                width: '90',
                textAlign: 'Right',
                isPrimaryKey: true,
                visible: false,
            },
            {
                field: 'ParentID',
                headerText: 'Parent ID',
                width: '90',
                textAlign: 'Right',
                visible: false,
            },
            {
                field: 'ResourceId',
                headerText: 'Resource',
                width: '360',
                validationRules: { required: true }
            },
            {
                field: 'Name',
                headerText: 'Type',
                width: '150',
                editType: 'dropdownedit'
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: '210',
                textAlign: 'Center',
                template: statusTemplate,
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'Region',
                headerText: 'Region',
                width: '180',
                template: regionTemplate,
                validationRules: { required: true },
                editType: 'dropdownedit'
            },
            {
                field: 'Environment',
                headerText: 'Environment',
                width: '140',
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'MonthlyCost',
                headerText: 'Monthly Cost ($)',
                width: '130',
                textAlign: 'Right',
                format: 'C0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'Cpu',
                headerText: 'CPU (%)',
                width: '120',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'Memory',
                headerText: 'Memory (%)',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'Disk',
                headerText: 'Disk (%)',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'NetworkMbps',
                headerText: 'Network (mbps)',
                width: '130',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'RequestsPerSec',
                headerText: 'Requests (per sec)',
                width: '150',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'ErrorRatePpm',
                headerText: 'Error Rate (ppm)',
                width: '170',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'SecurityFindings',
                headerText: 'Security Errors',
                width: '150',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },            
            {
                field: 'StorageGb',
                headerText: 'Storage (GB)',
                width: '120',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'InstanceCount',
                headerText: 'Instances',
                width: '110',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'UptimeDays',
                headerText: 'Uptime (days)',
                width: '150',
                textAlign: 'Right',
                format: 'N0',
                editType: 'numericedit',
                edit: { params: { format: 'n' } }
            },
            {
                field: 'Priority',
                headerText: 'Priority',
                width: '130',
                textAlign: 'Center',
                template: priorityTemplate,
                editType: 'dropdownedit',
                validationRules: { required: true }
            },
            {
                field: 'ComplianceScore',
                headerText: 'Compliance Score',
                width: '180',
                textAlign: 'Left',
                template: complianceTemplate,
                editType: 'numericedit',
                edit: { params: { format: 'n' } },
                validationRules: { required: true }
            },            
        ]
    });
    treegrid.appendTo('#TreeGrid');
    
    treegrid.actionBegin = function (args) {
        if(args.requestType === 'save') {
            args.data.TaskID = 10000 + Math.floor(Math.random() * 10001);
        }
    };
};
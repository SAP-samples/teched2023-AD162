export default function SetUserLogLevel(context) {
    try {
        if (context.getValue() && context.getValue()[0]) {
            var logger = context.getLogger();
            var listPickerValue = context.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(context, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(context, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(context, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(context, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(context, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(context, tracingEnabled) {
    let categories = context.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = context.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}
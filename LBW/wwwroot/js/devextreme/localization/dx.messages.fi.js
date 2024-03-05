/*!
* DevExtreme (dx.messages.fi.js)
* Version: 22.1.12
* Build date: Mon Dec 11 2023
*
* Copyright (c) 2012 - 2023 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        fi: {
            Yes: "Kyll\xe4",
            No: "Ei",
            Cancel: "Peruuta",
            Close: "Sulkea",
            Clear: "Tyhjenn\xe4",
            Done: "Valmis",
            Loading: "Ladataan...",
            Select: "Valitse...",
            Search: "Haku",
            Back: "Takaisin",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Ei n\xe4ytett\xe4vi\xe4 tietoja",
            "dxDropDownEditor-selectLabel": "Valitse",
            "validation-required": "Pakollinen",
            "validation-required-formatted": "{0} on pakollinen",
            "validation-numeric": "Arvon on oltava luku",
            "validation-numeric-formatted": "{0} on oltava luku",
            "validation-range": "Arvo on alueen ulkopuolella",
            "validation-range-formatted": "{0} on alueen ulkopuolella",
            "validation-stringLength": "Arvon pituus ei ole oikein",
            "validation-stringLength-formatted": "Arvolla {0} on v\xe4\xe4r\xe4 pituus",
            "validation-custom": "Arvo on virheellinen",
            "validation-custom-formatted": "{0} on virheellinen",
            "validation-async": "Arvo on virheellinen",
            "validation-async-formatted": "{0} on virheellinen",
            "validation-compare": "Arvot eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-compare-formatted": "{0} eiv\xe4t t\xe4sm\xe4\xe4",
            "validation-pattern": "Arvo ei vastaa mallia",
            "validation-pattern-formatted": "{0} ei vastaa mallia",
            "validation-email": "S\xe4hk\xf6postiosoite on virheellinen",
            "validation-email-formatted": "{0} on virheellinen",
            "validation-mask": "Arvo on virheellinen",
            "dxLookup-searchPlaceholder": "Merkkien v\xe4himm\xe4ism\xe4\xe4r\xe4: {0}",
            "dxList-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxList-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxList-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxList-pageLoadingText": "Ladataan...",
            "dxList-nextButtonText": "Lis\xe4\xe4",
            "dxList-selectAll": "Valitse kaikki",
            "dxListEditDecorator-delete": "Poista",
            "dxListEditDecorator-more": "Lis\xe4\xe4",
            "dxScrollView-pullingDownText": "P\xe4ivit\xe4 vet\xe4m\xe4ll\xe4 alas...",
            "dxScrollView-pulledDownText": "P\xe4ivit\xe4 vapauttamalla...",
            "dxScrollView-refreshingText": "P\xe4ivitet\xe4\xe4n...",
            "dxScrollView-reachBottomText": "Ladataan...",
            "dxDateBox-simulatedDataPickerTitleTime": "Valitse kellonaika",
            "dxDateBox-simulatedDataPickerTitleDate": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Valitse p\xe4iv\xe4m\xe4\xe4r\xe4 ja kellonaika",
            "dxDateBox-validation-datetime": "Arvon on oltava p\xe4iv\xe4ys tai aika",
            "dxFileUploader-selectFile": "Valitse tiedosto",
            "dxFileUploader-dropFile": "tai ved\xe4 ja pudota tiedosto t\xe4h\xe4n",
            "dxFileUploader-bytes": "tavua",
            "dxFileUploader-kb": "kt",
            "dxFileUploader-Mb": "Mt",
            "dxFileUploader-Gb": "Gt",
            "dxFileUploader-upload": "L\xe4het\xe4",
            "dxFileUploader-uploaded": "L\xe4hetetty",
            "dxFileUploader-readyToUpload": "Valmis l\xe4hetett\xe4v\xe4ksi",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "L\xe4hetys ep\xe4onnistui",
            "dxFileUploader-invalidFileExtension": "TODO",
            "dxFileUploader-invalidMaxFileSize": "TODO",
            "dxFileUploader-invalidMinFileSize": "TODO",
            "dxRangeSlider-ariaFrom": "Alkaen",
            "dxRangeSlider-ariaTill": "Asti",
            "dxSwitch-switchedOnText": "P\xc4\xc4LLE",
            "dxSwitch-switchedOffText": "POIS",
            "dxForm-optionalMark": "valinnainen",
            "dxForm-requiredMessage": "{0} on pakollinen",
            "dxNumberBox-invalidValueMessage": "Arvon on oltava numero",
            "dxNumberBox-noDataText": "Ei dataa",
            "dxDataGrid-columnChooserTitle": "Sarakkeenvalitsin",
            "dxDataGrid-columnChooserEmptyText": "Ved\xe4 sarake t\xe4\xe4ll\xe4 piilottaa sen",
            "dxDataGrid-groupContinuesMessage": "Jatkuu seuraavalla sivulla",
            "dxDataGrid-groupContinuedMessage": "Jatkoa edelliselt\xe4 sivulta",
            "dxDataGrid-groupHeaderText": "Ryhmittele t\xe4m\xe4n sarakkeen mukaan",
            "dxDataGrid-ungroupHeaderText": "Poista ryhmittely",
            "dxDataGrid-ungroupAllText": "Poista kaikki ryhmittym\xe4t",
            "dxDataGrid-editingEditRow": "Muokkaa",
            "dxDataGrid-editingSaveRowChanges": "Tallenna",
            "dxDataGrid-editingCancelRowChanges": "Peruuta",
            "dxDataGrid-editingDeleteRow": "Poista",
            "dxDataGrid-editingUndeleteRow": "Palauta",
            "dxDataGrid-editingConfirmDeleteMessage": "Oletko varma, ett\xe4 haluat poistaa t\xe4m\xe4n tietueen?",
            "dxDataGrid-validationCancelChanges": "Peruuta muutokset",
            "dxDataGrid-groupPanelEmptyText": "Ved\xe4 sarakeotsikko t\xe4h\xe4n, jos haluat ryhmitell\xe4 kyseisen sarakkeen mukaan",
            "dxDataGrid-noDataText": "Ei dataa",
            "dxDataGrid-searchPanelPlaceholder": "Haku...",
            "dxDataGrid-filterRowShowAllText": "(Kaikki)",
            "dxDataGrid-filterRowResetOperationText": "Palauta",
            "dxDataGrid-filterRowOperationEquals": "Yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationNotEquals": "Eri suuri kuin",
            "dxDataGrid-filterRowOperationLess": "Pienempi kuin",
            "dxDataGrid-filterRowOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationGreater": "Suurempi kuin",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxDataGrid-filterRowOperationStartsWith": "Alkaa merkeill\xe4",
            "dxDataGrid-filterRowOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxDataGrid-filterRowOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxDataGrid-filterRowOperationEndsWith": "Loppuu merkeill\xe4",
            "dxDataGrid-filterRowOperationBetween": "V\xe4lill\xe4",
            "dxDataGrid-filterRowOperationBetweenStartText": "Alkaa",
            "dxDataGrid-filterRowOperationBetweenEndText": "Loppu",
            "dxDataGrid-applyFilterText": "K\xe4yt\xe4 suodatinta",
            "dxDataGrid-trueText": "tosi",
            "dxDataGrid-falseText": "ep\xe4tosi",
            "dxDataGrid-sortingAscendingText": "Lajittele nouseva",
            "dxDataGrid-sortingDescendingText": "Lajittele laskeva",
            "dxDataGrid-sortingClearText": "Tyhjenn\xe4 lajittelu",
            "dxDataGrid-editingSaveAllChanges": "Tallenna muutokset",
            "dxDataGrid-editingCancelAllChanges": "Hylk\xe4\xe4 muutokset",
            "dxDataGrid-editingAddRow": "Lis\xe4\xe4 rivi",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} on {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} on {0}",
            "dxDataGrid-summaryAvg": "Keskiarvo: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Keskiarvo {1} on {0}",
            "dxDataGrid-summarySum": "Summa: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summa {1} on {0}",
            "dxDataGrid-summaryCount": "M\xe4\xe4r\xe4: {0}",
            "dxDataGrid-columnFixingFix": "Kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingUnfix": "Poista kiinte\xe4t sarakkeet",
            "dxDataGrid-columnFixingLeftPosition": "Vasemmalle",
            "dxDataGrid-columnFixingRightPosition": "Oikealle",
            "dxDataGrid-exportTo": "Vie",
            "dxDataGrid-exportToExcel": "Vie Exceliin",
            "dxDataGrid-exporting": "Vienti...",
            "dxDataGrid-excelFormat": "Excel-tiedostot",
            "dxDataGrid-selectedRows": "Valitut tietueet",
            "dxDataGrid-exportSelectedRows": "Vie valitut tietueet",
            "dxDataGrid-exportAll": "Vie kaikki tiedot",
            "dxDataGrid-headerFilterEmptyValue": "(Tyhj\xe4t)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Peruuta",
            "dxDataGrid-ariaColumn": "Sarake",
            "dxDataGrid-ariaValue": "Arvo",
            "dxDataGrid-ariaFilterCell": "Suodatinsolu",
            "dxDataGrid-ariaCollapse": "Tiivist\xe4",
            "dxDataGrid-ariaExpand": "Laajenna",
            "dxDataGrid-ariaDataGrid": "Tietoruudukko",
            "dxDataGrid-ariaSearchInGrid": "Hae tietorivilt\xe4",
            "dxDataGrid-ariaSelectAll": "Valitse kaikki",
            "dxDataGrid-ariaSelectRow": "Valitse rivi",
            "dxDataGrid-filterBuilderPopupTitle": "Suodattimen muodostin",
            "dxDataGrid-filterPanelCreateFilter": "Luo suodatin",
            "dxDataGrid-filterPanelClearFilter": "Tyhjenn\xe4",
            "dxDataGrid-filterPanelFilterEnabledHint": "Ota suodatin k\xe4ytt\xf6\xf6n",
            "dxTreeList-ariaTreeList": "Puu",
            "dxTreeList-editingAddRowToNode": "Lis\xe4\xe4",
            "dxPager-infoText": "Sivu {0}/{1} ({2} kohdetta)",
            "dxPager-pagesCountText": "/",
            "dxPager-pageSize": "Items per page: {0}",
            "dxPager-pageSizesAllText": "Kaikki",
            "dxPivotGrid-grandTotal": "Loppusumma",
            "dxPivotGrid-total": "{0} Summa",
            "dxPivotGrid-fieldChooserTitle": "Kent\xe4n valitseminen",
            "dxPivotGrid-showFieldChooser": "Avaa kent\xe4n valitsemistoiminto",
            "dxPivotGrid-expandAll": "Laajenna kaikki",
            "dxPivotGrid-collapseAll": "Tiivist\xe4 kaikki",
            "dxPivotGrid-sortColumnBySummary": 'Lajittele "{0}" t\xe4h\xe4n sarakkeeseen',
            "dxPivotGrid-sortRowBySummary": 'Lajittele "{0}" t\xe4m\xe4n rivin mukaan',
            "dxPivotGrid-removeAllSorting": "Poista kaikki lajittelu",
            "dxPivotGrid-dataNotAvailable": "Puuttuu",
            "dxPivotGrid-rowFields": "Rivikent\xe4t",
            "dxPivotGrid-columnFields": "Sarakekent\xe4t",
            "dxPivotGrid-dataFields": "Tietokent\xe4t",
            "dxPivotGrid-filterFields": "Suodatinkent\xe4t",
            "dxPivotGrid-allFields": "Kaikki kent\xe4t",
            "dxPivotGrid-columnFieldArea": "Pudota sarakekent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-dataFieldArea": "Pudota tietokent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-rowFieldArea": "Pudota rivikent\xe4t t\xe4h\xe4n",
            "dxPivotGrid-filterFieldArea": "Pudota suodatinkent\xe4t t\xe4h\xe4n",
            "dxScheduler-editorLabelTitle": "Aihe",
            "dxScheduler-editorLabelStartDate": "Alkamisp\xe4iv\xe4",
            "dxScheduler-editorLabelEndDate": "P\xe4\xe4ttymisp\xe4iv\xe4",
            "dxScheduler-editorLabelDescription": "Kuvaus",
            "dxScheduler-editorLabelRecurrence": "Toista",
            "dxScheduler-openAppointment": "Avaa tapaaminen",
            "dxScheduler-recurrenceNever": "Ei koskaan",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "P\xe4ivitt\xe4in",
            "dxScheduler-recurrenceWeekly": "Viikoittain",
            "dxScheduler-recurrenceMonthly": "Kuukausittain",
            "dxScheduler-recurrenceYearly": "Vuosittain",
            "dxScheduler-recurrenceRepeatEvery": "Joka",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Loppu",
            "dxScheduler-recurrenceAfter": "J\xe4lkeen",
            "dxScheduler-recurrenceOn": "Aika",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "p\xe4ivitt\xe4in",
            "dxScheduler-recurrenceRepeatWeekly": "viikon v\xe4lein",
            "dxScheduler-recurrenceRepeatMonthly": "kuukauden v\xe4lein",
            "dxScheduler-recurrenceRepeatYearly": "vuosittain",
            "dxScheduler-switcherDay": "P\xe4iv\xe4",
            "dxScheduler-switcherWeek": "Viikko",
            "dxScheduler-switcherWorkWeek": "Ty\xf6viikko",
            "dxScheduler-switcherMonth": "Kuukausi",
            "dxScheduler-switcherAgenda": "Esityslista",
            "dxScheduler-switcherTimelineDay": "Aikajana p\xe4iv\xe4",
            "dxScheduler-switcherTimelineWeek": "Aikajana viikko",
            "dxScheduler-switcherTimelineWorkWeek": "Aikajana ty\xf6viikko",
            "dxScheduler-switcherTimelineMonth": "Aikajana kuukausi",
            "dxScheduler-recurrenceRepeatOnDate": "p\xe4iv\xe4m\xe4\xe4r\xe4ll\xe4",
            "dxScheduler-recurrenceRepeatCount": "esiintymi\xe4",
            "dxScheduler-allDay": "Koko p\xe4iv\xe4",
            "dxScheduler-confirmRecurrenceEditMessage": "Haluatko muokata vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Haluatko poistaa vain t\xe4m\xe4n tapaamisen tai koko sarja?",
            "dxScheduler-confirmRecurrenceEditSeries": "Muokkaa sarjaa",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Poista sarja",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Muokkaa tapaaminen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Poista tapaaminen",
            "dxScheduler-noTimezoneTitle": "Ei aikavy\xf6hyke",
            "dxScheduler-moreAppointments": "{0} lis\xe4\xe4",
            "dxCalendar-todayButtonText": "T\xe4n\xe4\xe4n",
            "dxCalendar-ariaWidgetName": "Kalenteri",
            "dxColorView-ariaRed": "Punainen",
            "dxColorView-ariaGreen": "Vihre\xe4",
            "dxColorView-ariaBlue": "Sininen",
            "dxColorView-ariaAlpha": "L\xe4pin\xe4kyvyys",
            "dxColorView-ariaHex": "V\xe4rikoodi",
            "dxTagBox-selected": "{0} valittu",
            "dxTagBox-allSelected": "Kaikki valitut ({0})",
            "dxTagBox-moreSelected": "{0} lis\xe4\xe4",
            "vizExport-printingButtonText": "Tulosta",
            "vizExport-titleMenuText": "Vienti/Tulostus",
            "vizExport-exportButtonText": "{0} tiedosto",
            "dxFilterBuilder-and": "Ja",
            "dxFilterBuilder-or": "Tai",
            "dxFilterBuilder-notAnd": "Ei ja",
            "dxFilterBuilder-notOr": "Ei tai",
            "dxFilterBuilder-addCondition": "Lis\xe4\xe4 ehto",
            "dxFilterBuilder-addGroup": "Lis\xe4\xe4 ryhm\xe4",
            "dxFilterBuilder-enterValueText": "<anna arvo>",
            "dxFilterBuilder-filterOperationEquals": "On sama kuin",
            "dxFilterBuilder-filterOperationNotEquals": "Ei ole sama kuin",
            "dxFilterBuilder-filterOperationLess": "Pienempi kuin",
            "dxFilterBuilder-filterOperationLessOrEquals": "Pienempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationGreater": "Suurempi kuin",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Suurempi tai yht\xe4 suuri kuin",
            "dxFilterBuilder-filterOperationStartsWith": "Alkaa merkill\xe4",
            "dxFilterBuilder-filterOperationContains": "Sis\xe4lt\xe4\xe4",
            "dxFilterBuilder-filterOperationNotContains": "Ei sis\xe4ll\xe4",
            "dxFilterBuilder-filterOperationEndsWith": "Loppuu merkill\xe4",
            "dxFilterBuilder-filterOperationIsBlank": "On tyhj\xe4",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ei ole tyhj\xe4",
            "dxFilterBuilder-filterOperationBetween": "V\xe4lill\xe4",
            "dxFilterBuilder-filterOperationAnyOf": "Joku n\xe4ist\xe4",
            "dxFilterBuilder-filterOperationNoneOf": "Ei mik\xe4\xe4n n\xe4ist\xe4",
            "dxHtmlEditor-dialogColorCaption": "!TODO!",
            "dxHtmlEditor-dialogBackgroundCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkUrlField": "!TODO!",
            "dxHtmlEditor-dialogLinkTextField": "!TODO!",
            "dxHtmlEditor-dialogLinkTargetField": "!TODO!",
            "dxHtmlEditor-dialogImageCaption": "!TODO!",
            "dxHtmlEditor-dialogImageUrlField": "!TODO!",
            "dxHtmlEditor-dialogImageAltField": "!TODO!",
            "dxHtmlEditor-dialogImageWidthField": "!TODO!",
            "dxHtmlEditor-dialogImageHeightField": "!TODO!",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-dialogUpdateImageCaption": "!TODO",
            "dxHtmlEditor-dialogImageUpdateButton": "!TODO",
            "dxHtmlEditor-dialogImageAddButton": "!TODO",
            "dxHtmlEditor-dialogImageSpecifyUrl": "!TODO",
            "dxHtmlEditor-dialogImageSelectFile": "!TODO",
            "dxHtmlEditor-dialogImageKeepAspectRatio": "!TODO",
            "dxHtmlEditor-dialogImageEncodeToBase64": "!TODO",
            "dxHtmlEditor-heading": "!TODO!",
            "dxHtmlEditor-normalText": "!TODO!",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertHeaderRow": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-cellProperties": "TODO",
            "dxHtmlEditor-tableProperties": "TODO",
            "dxHtmlEditor-insert": "TODO",
            "dxHtmlEditor-delete": "TODO",
            "dxHtmlEditor-border": "TODO",
            "dxHtmlEditor-style": "TODO",
            "dxHtmlEditor-width": "TODO",
            "dxHtmlEditor-height": "TODO",
            "dxHtmlEditor-borderColor": "TODO",
            "dxHtmlEditor-tableBackground": "TODO",
            "dxHtmlEditor-dimensions": "TODO",
            "dxHtmlEditor-alignment": "TODO",
            "dxHtmlEditor-horizontal": "TODO",
            "dxHtmlEditor-vertical": "TODO",
            "dxHtmlEditor-paddingVertical": "TODO",
            "dxHtmlEditor-paddingHorizontal": "TODO",
            "dxHtmlEditor-pixels": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage": "TODO",
            "dxGantt-dialogConstraintViolationSeveralTasksMessage": "TODO",
            "dxGantt-dialogDeleteDependenciesMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependenciesMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO",
            "dxGantt-sortingAscendingText": "Lajittele nouseva",
            "dxGantt-sortingDescendingText": "Lajittele laskeva",
            "dxGantt-sortingClearText": "Tyhjenn\xe4 lajittelu",
            "dxGantt-showResources": "TODO",
            "dxGantt-showDependencies": "TODO",
            "dxGantt-dialogStartDateValidation": "TODO",
            "dxGantt-dialogEndDateValidation": "TODO"
        }
    })
}));

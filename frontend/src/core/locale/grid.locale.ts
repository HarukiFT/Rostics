export const Locale = {
  // Toolbar
  toolbarDensity: "Плотность",
  toolbarDensityLabel: "Плотность",
  toolbarDensityCompact: "Компактная",
  toolbarDensityStandard: "Стандартная",
  toolbarDensityComfortable: "Комфортная",

  // Columns panel text
  columnsPanelTextFieldLabel: "Найти колонку",
  columnsPanelTextFieldPlaceholder: "Название колонки",
  columnsPanelDragIconLabel: "Изменить порядок",
  columnsPanelShowAllButton: "Показать все",
  columnsPanelHideAllButton: "Скрыть все",

  // Filter panel text
  filterPanelAddFilter: "Добавить фильтр",
  filterPanelDeleteIconLabel: "Удалить",
  filterPanelLinkOperator: "Логический оператор",
  filterPanelOperators: "Операторы", // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: "И",
  filterPanelOperatorOr: "Или",
  filterPanelColumns: "Колонки",
  filterPanelInputLabel: "Значение",
  filterPanelInputPlaceholder: "Значение фильтра",

  // Filter operators text
  filterOperatorContains: "содержит",
  filterOperatorEquals: "равно",
  filterOperatorStartsWith: "начинается с",
  filterOperatorEndsWith: "заканчивается на",
  filterOperatorIs: "является",
  filterOperatorNot: "не является",
  filterOperatorAfter: "после",
  filterOperatorOnOrAfter: "на или после",
  filterOperatorBefore: "до",
  filterOperatorOnOrBefore: "на или до",
  filterOperatorIsEmpty: "пусто",
  filterOperatorIsNotEmpty: "не пусто",
  filterOperatorIsAnyOf: "любой из",

  // Filter values text
  true: "Да",
  false: "Нет",

  // Column menu text
  columnMenuLabel: "Меню",
  columnMenuShowColumns: "Показать колонки",
  columnMenuFilter: "Фильтр",
  columnMenuHideColumn: "Скрыть",
  columnMenuUnsort: "Отменить сортировку",
  columnMenuSortAsc: "Сортировать по возрастанию",
  columnMenuSortDesc: "Сортировать по убыванию",

  // Column header text
  columnHeaderFiltersTooltipActive: (count: number) =>
    `${count} активный фильтр`,
  columnHeaderFiltersLabel: "Показать фильтры",
  columnHeaderSortIconLabel: "Сортировка",

  // Rows selected footer text
  footerRowSelected: (count: number) =>
    count !== 1
      ? `${count.toLocaleString()} строк выбрано`
      : `${count.toLocaleString()} строка выбрана`,

  // Total row amount footer text
  footerTotalRows: "Всего строк:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount: number, totalCount: number) =>
    `${visibleCount.toLocaleString()} из ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Выбор",
  checkboxSelectionSelectAllRows: "Выбрать все строки",
  checkboxSelectionUnselectAllRows: "Отменить выбор всех строк",
  checkboxSelectionSelectRow: "Выбрать строку",
  checkboxSelectionUnselectRow: "Отменить выбор строки",

  // Boolean cell text
  booleanCellTrueLabel: "Да",
  booleanCellFalseLabel: "Нет",

  // Actions cell more text
  actionsCellMore: "больше",

  // Column pinning text
  pinToLeft: "Закрепить слева",
  pinToRight: "Закрепить справа",
  unpin: "Открепить",

  // Tree Data
  treeDataGroupingHeaderName: "Группа",
  treeDataExpand: "показать детей",
  treeDataCollapse: "скрыть детей",

  // Grouping columns
  groupingColumnHeaderName: "Группа",
  groupColumn: (name: string) => `Группа по ${name}`,
  unGroupColumn: (name: string) => `Разгруппировать по ${name}`,

  // Master/detail
  detailPanelToggle: "Переключить панель деталей",
  expandDetailPanel: "Развернуть",
  collapseDetailPanel: "Свернуть",

  // Used core components translation keys
  MuiTablePagination: {
    labelDisplayedRows: ({
      from,
      to,
      count,
    }: {
      from: number;
      to: number;
      count: number;
    }) => `${from}–${to} из ${count !== -1 ? count : `больше чем ${to}`}`,
    labelRowsPerPage: "Строк на странице:",
  },

  // Virtual scroller
  virtualScrollerPageUp: "Страница вверх",
  virtualScrollerPageDown: "Страница вниз",
  virtualScrollerPageLeft: "Страница влево",
  virtualScrollerPageRight: "Страница вправо",
};

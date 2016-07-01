// Type definitions for zTree 3.5.24
// Project: https://github.com/zTree/zTree_v3
// Definitions by: ChengFu Lin <https://github.com/chengfulin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// API Document: http://www.ztree.me/v3/api.php

/// <reference path="../jquery/jquery.d.ts"/>

interface ZTreeAsyncSettings {
    autoParam?: string[];
    contentType?: string;
    dataFilter?: (treeId: string, parentNode: ZTreeNode, responseData: Object[]|Object|string) => Object[]|Object;
    dataType?: string;
    enable?: boolean;
    otherParam?: string[]|Object;
    type?: string;
    url?:string;
}

interface ZTreeCallbackSettings {
    beforeAsync?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeCheck?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeClick?: (treeId: string, treeNode: ZTreeNode, clickFlag: number) => boolean;
    beforeCollapse?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeDblClick?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeDrag?: (treeId: string, treeNodes: ZTreeNode[]) => boolean;
    beforeDragOpen?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeDrop?: (treeId: string, treeNodes: ZTreeNode[], targetNode: ZTreeNode, moveType: string, isCopy: boolean) => boolean;
    beforeEditName?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeExpand?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeMouseDown?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeMouseUp?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeRemove?: (treeId: string, treeNode: ZTreeNode) => boolean;
    beforeRename?: (treeId: string, treeNode: ZTreeNode, newName: string, isCancel: boolean) => boolean;
    beforeRightClick?: (treeId: string, treeNode: ZTreeNode) => boolean;

    onAsyncError?: (event: Event, treeId: string, treeNode: ZTreeNode, XMLHttpRequest: string, textStatus: string, errorThrown: string) => void;
    onAsyncSuccess?: (event: Event, treeId: string, treeNode: ZTreeNode, msg: string | Object) => void;
    onCheck?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onClick?: (event: Event, treeId: string, treeNode: ZTreeNode, clickFlag: number) => void;
    onCollapse?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onDblClick?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onDrag?: (event: Event, treeId: string, treeNodes: ZTreeNode[]) => void;
    onDragMove?: (event: Event, treeId: string, treeNodes: ZTreeNode[]) => void;
    onDrop?: (event: Event, treeId: string, treeNodes: ZTreeNode[], targetNode: ZTreeNode, moveType: string, isCopy: boolean) => void;
    onExpand?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onMouseDown?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onMouseUp?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onNodeCreated?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onRemove?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
    onRename?: (event: Event, treeId: string, treeNode: ZTreeNode, isCancel: boolean) => void;
    onRightClick?: (event: Event, treeId: string, treeNode: ZTreeNode) => void;
}

interface ZTreeCheckSettings {
    autoCheckTrigger?: boolean;
    chkboxType?: Object;
    chkStyle?: string;
    enable?: boolean;
    nocheckInherit?: boolean;
    chkDisabledInherit?: boolean;
    radioType?: string;
}

interface ZTreeKeepDataSettings {
    leaf?: boolean;
    parent?: boolean;
}

interface ZTreeKeyDataSettings {
    checked?: string;
    children?: string;
    name?: string;
    title?: string;
    url?: string;
}

interface ZTreeSimpleDataSettings {
    enable?: boolean;
    idKey?: string;
    pIdKey?: string;
    rootPId?: string|number;
}

interface ZTreeDataSettings {
    keep?: ZTreeKeepDataSettings;
    key?: ZTreeKeyDataSettings;
    simpleData?: ZTreeSimpleDataSettings;
}

interface ZTreeDragSettings {
    autoExpandTrigger?: boolean;
    isCopy?: boolean;
    isMove?: boolean;
    prev?: boolean | ((treeId: string, treeNodes: ZTreeNode[], targetNode: ZTreeNode) => boolean);
    next?: boolean | ((treeId: string, treeNodes: ZTreeNode[], targetNode: ZTreeNode) => boolean);
    inner?: boolean | ((treeId: string, treeNodes: ZTreeNode[], targetNode: ZTreeNode) => boolean);
    borderMax?: number;
    borderMin?: number;
    minMoveSize?: number;
    maxShowNodeNum?: number;
    autoOpenTime?: number;
}

interface ZTreeEditSettings {
    drag?: ZTreeDragSettings;
    editNameSelectAll?: boolean;
    enable?: boolean;
    removeTitle?: string | ((treeId: string, treeNode: ZTreeNode) => string);
    renameTitle?: string | ((treeId: string, treeNode: ZTreeNode) => string);
    showRemoveBtn?: boolean | ((treeId: string, treeNode: ZTreeNode) => boolean);
    showRenameBtn?: boolean | ((treeId: string, treeNode: ZTreeNode) => boolean);
}

interface ZTreeViewSettings {
    addDiyDom?: (treeId: string, treeNode: ZTreeNode) => void;
    addHoverDom?: (treeId: string, treeNode: ZTreeNode) => void;
    autoCancelSelected?: boolean;
    dblClickExpand?: boolean | ((treeId: string, treeNode: ZTreeNode) => boolean);
    expandSpeed?: string | number;
    fontCss?: Object | ((treeId: string, treeNode: ZTreeNode) => Object);
    nameIsHTML?: boolean;
    removeHoverDom?: (treeId: string, treeNode: ZTreeNode) => void;
    selectedMulti?: boolean;
    showIcon?: boolean | ((treeId: string, treeNode: ZTreeNode) => boolean);
    showLine?: boolean;
    showTitle?: boolean | ((treeId: string, treeNode: ZTreeNode) => boolean);
    txtSelectedEnable?: boolean;
}

interface ZTreeSettings {
    treeId?: string;
    treeObj?: any;
    async?: ZTreeAsyncSettings;
    callback?: ZTreeCallbackSettings;
    check?: ZTreeCheckSettings;
    data?: ZTreeDataSettings;
    edit?: ZTreeEditSettings;
    view?: ZTreeViewSettings;
}

interface ZTreeObject {
    setting: ZTreeSettings;
    addNodes(parentNode: ZTreeNode, newNodes: ZTreeNode | ZTreeNode[], isSilent: boolean): ZTreeNode[];
    addNodes(parentNode: ZTreeNode, index: number, newNodes: ZTreeNode | ZTreeNode[], isSilent: boolean): ZTreeNode[];
    cancelEditName(newName: string): void;
    cancelSelectedNode(treeNode: ZTreeNode): void;
    checkAllNodes(checked: boolean): void;
    checkNode(treeNode: ZTreeNode, checked: boolean, checkTypeFlag: boolean, callbackFlag: boolean): void;
    copyNode(targetNode: ZTreeNode, treeNode: ZTreeNode, moveType: string, isSilent: boolean): ZTreeNode;
    destroy(): void;
    editName(treeNode: ZTreeNode): void;
    expandAll(expandFlag: boolean): boolean;
    expandNode(treeNode: ZTreeNode, expandFlag: boolean, sonSign: boolean, focus: boolean, callbackFlag: boolean): boolean;
    getChangeCheckedNodes(): ZTreeNode[];
    getCheckedNodes(checked: boolean): ZTreeNode[];
    getNodeByParam(key: string, value: any, parentNode: ZTreeNode): ZTreeNode;
    getNodeByTId(tId: string): ZTreeNode;
    getNodeIndex(treeNode: ZTreeNode): number;
    getNodes(): ZTreeNode[];
    getNodesByFilter(filter: Function, isSingle: boolean, parentNode: ZTreeNode, invokeParam: any): ZTreeNode[] | ZTreeNode;
    getNodesByParam(key: string, value: any, parentNode: ZTreeNode): ZTreeNode[];
    getNodesByParamFuzzy(key: string, value: string, parentNode: ZTreeNode): ZTreeNode[];
    getSelectedNodes(): ZTreeNode[];
    hideNode(treeNode: ZTreeNode): void;
    hideNodes(treeNodes: ZTreeNode[]): void;
    moveNode(targetNode: ZTreeNode, treeNode: ZTreeNode, moveType: string, isSilent: boolean): ZTreeNode;
    reAsyncChildNodes(parentNode: ZTreeNode, reloadType: string, isSilent: boolean): void;
    refresh(): void;
    removeChildNodes(parentNode: ZTreeNode): ZTreeNode[];
    removeNode(treeNode: ZTreeNode, callbackFlag: boolean): void;
    selectNode(treeNode: ZTreeNode, addFlag: boolean): void;
    setChkDisabled(treeNode: ZTreeNode, disabled: boolean, inheritParent: boolean, inheritChildren: boolean): void;
    setEditable(editable: boolean): boolean;
    showNode(treeNodes: ZTreeNode[]): void;
    showNodes(treeNodes: ZTreeNode[]): void;
    transformToArray(treeNodes: ZTreeNode[]): ZTreeNode[];
    transformTozTreeNodes(simpleNodes: ZTreeNode[] | ZTreeNode): ZTreeNode[];
    updateNode(treeNode: ZTreeNode, checkTypeFlag: boolean): void;
}

interface ZTreeNode {
    checked?: boolean;
    children?: ZTreeNode[];
    chkDisabled?: boolean;
    click?: string;
    getCheckStatus?: () => Object;
    getIndex?: () => number;
    getNextNode?: () => ZTreeNode;
    getParentNode?: () => ZTreeNode;
    getPath?: () => ZTreeNode[];
    getPreNode?: () => ZTreeNode;
    halfCheck?: boolean;
    icon?: string;
    iconClose?: string;
    iconOpen?: string;
    iconSkin?: string;
    isHidden?: boolean;
    isParent?: boolean;
    name?: string;
    nocheck?: boolean;
    open?: boolean;
    target?: string;
    url?: string;

    check_Child_State?: number;
    check_Focus?: boolean;
    checkedOld?: boolean;
    editNameFlag?: boolean;
    isAjaxing?: boolean;
    isFirstNode?: boolean;
    isHover?: boolean;
    isLastNode?: boolean;
    level?: number;
    parentTId?: string;
    tId?: string;
    zAsync?: boolean;
}

interface JQuery {

    zTree: {
        /**
         * to create a zTree
         * @param object DOM Container for zTree
         * @param zSetting zTree's configuration data
         * @param zNodes zTree's node data
         * @returns {ZTreeObject} zTree object
         */
        init(object: JQuery, zSetting: ZTreeSettings, zNodes: ZTreeNode[] | ZTreeNode): ZTreeObject;
        /**
         * get zTree object from the tree's Id
         * @param treeId zTree unique identifier
         * @returns {ZTreeObject} This is a reference to the zTree object
         */
        getZTreeObj: (treeId: string) => ZTreeObject;
        /**
         * destruction
         * @param treeId zTree unique identifier
         * @returns {} 
         */
        destroy: (treeId: string) => void;
        _Z: Object;
    };
}

interface JQueryStatic {
    zTree: {
        /**
         * to create a zTree
         * @param object DOM Container for zTree
         * @param zSetting zTree's configuration data
         * @param zNodes zTree's node data
         * @returns {ZTreeObject} zTree object
         */
        init(object: JQuery, zSetting: Object, zNodes: ZTreeNode[] | ZTreeNode): ZTreeObject;
        /**
         * get zTree object from the tree's Id
         * @param treeId zTree unique identifier
         * @returns {ZTreeObject} This is a reference to the zTree object
         */
        getZTreeObj: (treeId: string) => ZTreeObject;
        /**
         * destruction
         * @param treeId zTree unique identifier
         * @returns {} 
         */
        destroy: (treeId: string) => void;
        _Z: Object;
    };
}

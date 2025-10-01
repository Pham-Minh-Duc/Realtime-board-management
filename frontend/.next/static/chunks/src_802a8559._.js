(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/DraggableTask.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DraggableTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function DraggableTask(param) {
    let { task } = param;
    _s();
    const [{ isDragging }, drag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrag"])({
        "DraggableTask.useDrag": ()=>({
                type: "TASK",
                item: {
                    id: task.id
                },
                collect: ({
                    "DraggableTask.useDrag": (monitor)=>({
                            isDragging: monitor.isDragging()
                        })
                })["DraggableTask.useDrag"]
            })
    }["DraggableTask.useDrag"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drag,
        className: "bg-white p-2 rounded shadow m-1 cursor-move ".concat(isDragging ? "opacity-50" : ""),
        children: [
            task.title,
            " - ",
            task.status
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DraggableTask.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(DraggableTask, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrag"]
    ];
});
_c = DraggableTask;
var _c;
__turbopack_context__.k.register(_c, "DraggableTask");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/card/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/dashboard/card/[id]/page.jsx'\n\nExpected ',', got 'export'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=src_802a8559._.js.map
module.exports = [
"[project]/src/components/DraggableTask.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DraggableTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-ssr] (ecmascript)");
;
;
function DraggableTask({ task }) {
    const [{ isDragging }, drag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDrag"])(()=>({
            type: "TASK",
            item: {
                id: task.id
            },
            collect: (monitor)=>({
                    isDragging: monitor.isDragging()
                })
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drag,
        className: `bg-white p-2 rounded shadow m-1 cursor-move ${isDragging ? "opacity-50" : ""}`,
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
}),
"[project]/src/app/dashboard/card/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/dashboard/card/[id]/page.jsx'\n\nExpected ',', got 'export'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=src_52f6cdce._.js.map
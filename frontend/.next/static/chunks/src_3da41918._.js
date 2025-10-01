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
"[project]/src/components/DropColumn.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DropColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableTask$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DraggableTask.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DropColumn(param) {
    let { status, tasks, onDrop } = param;
    _s();
    const [{ isOver }, drop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrop"])({
        "DropColumn.useDrop": ()=>({
                accept: "TASK",
                drop: ({
                    "DropColumn.useDrop": (item)=>onDrop(item.id, status)
                })["DropColumn.useDrop"],
                collect: ({
                    "DropColumn.useDrop": (monitor)=>({
                            isOver: monitor.isOver()
                        })
                })["DropColumn.useDrop"]
            })
    }["DropColumn.useDrop"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drop,
        className: "bg-blue-100 p-2 rounded min-h-[100px] ".concat(isOver ? "bg-blue-200" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center font-bold mb-2",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/DropColumn.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableTask$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        task: task
                    }, task.id, false, {
                        fileName: "[project]/src/components/DropColumn.jsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/DropColumn.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DropColumn.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(DropColumn, "9166pYLrZ/JzF75YDim8ZjfICTM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrop"]
    ];
});
_c = DropColumn;
var _c;
__turbopack_context__.k.register(_c, "DropColumn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/api/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const API = {
    auth: {
        signup: "/auth/signup",
        signin: "/auth/signin",
        profile: "/auth/profile"
    },
    users: {
        list: "/users",
        byid: (id)=>"/users/".concat(id),
        update: (id)=>"/users/".concat(id),
        delete: (id)=>"/users/".concat(id)
    },
    card: {
        list: "/cards",
        add: "/cards",
        byid: (id)=>"/cards/".concat(id),
        update: (id)=>"/cards/".concat(id),
        delete: (id)=>"/cards/".concat(id),
        byUser: (userId)=>"/cards/users/".concat(userId),
        invite: (cardId)=>"/cards/".concat(cardId, "/invite"),
        acceptInvite: (cardId)=>"/cards/".concat(cardId, "/invite/accept"),
        tasks: (cardId)=>"/cards/".concat(cardId, "/tasks")
    },
    tasks: {
        byCard: (cardId)=>"/cards/".concat(cardId, "/tasks"),
        byId: (cardId, taskId)=>"/cards/".concat(cardId, "/tasks/").concat(taskId),
        assign: (cardId, taskId)=>"/cards/".concat(cardId, "/tasks/").concat(taskId, "/assign"),
        attachments: (cardId, taskId)=>"/cards/".concat(cardId, "/tasks/").concat(taskId, "/github-attachments"),
        attach: (cardId, taskId)=>"/cards/".concat(cardId, "/tasks/").concat(taskId, "/github-attach")
    }
};
const __TURBOPACK__default__export__ = API;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/taskService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module './apiConfig'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/api.js [app-client] (ecmascript)");
;
;
const taskService = {
    getByCard: async (cardId)=>{
        const res = await apiClient.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.byCard(cardId));
        return res.data;
    },
    create: async (cardId, payload)=>{
        const res = await apiClient.post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.byCard(cardId), payload);
        return res.data;
    },
    update: async (cardId, taskId, payload)=>{
        const res = await apiClient.put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.byId(cardId, taskId), payload);
        return res.data;
    },
    patch: async (cardId, taskId, payload)=>{
        const res = await apiClient.patch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.byId(cardId, taskId), payload);
        return res.data;
    },
    remove: async (cardId, taskId)=>{
        const res = await apiClient.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.byId(cardId, taskId));
        return res.data;
    },
    assign: async (cardId, taskId, memberId)=>{
        const res = await apiClient.post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.assign(cardId, taskId), {
            memberId
        });
        return res.data;
    },
    getAttachments: async (cardId, taskId)=>{
        const res = await apiClient.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.attachments(cardId, taskId));
        return res.data;
    },
    attachGitHub: async (cardId, taskId, payload)=>{
        const res = await apiClient.post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tasks.attach(cardId, taskId), payload);
        return res.data;
    }
};
const __TURBOPACK__default__export__ = taskService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/card/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$componentTag$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/componentTag/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$componentTag$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/componentTag/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/core/DndProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dnd-html5-backend/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableTask$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DraggableTask.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropColumn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DropColumn.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$taskService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/taskService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CardDetailPage() {
    _s();
    const [isForcused, setIsForcused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTaskTitle, setNewTaskTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const statuses = [
        "Icebox",
        "Backlog",
        "Ongoing",
        "Review",
        "Done"
    ];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const cardId = Number(params.id);
    useEffect({
        "CardDetailPage.useEffect": ()=>{
            if (!cardId) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$taskService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getByCard(cardId).then({
                "CardDetailPage.useEffect": (data)=>setTasks(data)
            }["CardDetailPage.useEffect"]).catch({
                "CardDetailPage.useEffect": (err1)=>console.error("Error loading tasks:", err1)
            }["CardDetailPage.useEffect"]);
        }
    }["CardDetailPage.useEffect"], [
        cardId
    ]);
    const handleAddTask = ()=>{
        if (!newTaskTitle.trim()) return;
        const newTask = {
            id: Date.now().toString(),
            title: newTaskTitle,
            status: "Icebox",
            cardId: cardId
        };
        setTasks([
            ...tasks,
            newTask
        ]);
        setNewTaskTitle("");
    };
    const handleDrop = async (taskId, newStatus)=>{
        try {
            setTasks((prev)=>prev.map((task)=>task.id === taskId ? {
                        ...task,
                        status: newStatus
                    } : task));
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$taskService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].update(cardId, taskId, {
                status: newStatus
            });
        } catch (e) {
            console.error(err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndProvider"], {
        backend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2d$html5$2d$backend$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML5Backend"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-rows justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold mb-4",
                            children: [
                                "Detail Card #",
                                cardId
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbXboxX"], {
                            onClick: ()=>router.push("/dashboard/card"),
                            className: "w-[30px] h-[30px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-rows w-full h-full gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-300 w-1/4 h-full rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$componentTag$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    placeholder: "Add a new task",
                                    onFocus: ()=>setIsForcused(true),
                                    onBlur: ()=>setIsForcused(false),
                                    className: "m-1",
                                    value: newTaskTitle,
                                    onChange: (e)=>setNewTaskTitle(e.target.value),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                isForcused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-200 mt-1 rounded-lg h-[40px] flex items-center m-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$componentTag$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Add Task",
                                            onClick: handleAddTask,
                                            className: "ml-2 mr-2 w-[78px] h-[30px] text-[10px] font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$componentTag$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            label: "Cancel",
                                            onClick: ()=>setIsForcused(false),
                                            className: "w-[78px] h-[30px] text-[10px] font-bold bg-gray-200 !text-black hover:bg-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1",
                                    children: tasks.filter((task)=>task.cardId === cardId).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableTask$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            task: task
                                        }, task.id, false, {
                                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-300 w-3/4 h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-5 gap-4 w-full h-full p-4 bg-white rounded-lg",
                                children: statuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DropColumn$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        status: status,
                                        tasks: tasks.filter((task)=>task.cardId === cardId && task.status === status),
                                        onDrop: handleDrop
                                    }, status, false, {
                                        fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/card/[id]/page.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(CardDetailPage, "pwLQmmDGfF88WBXv6RcDbgSHk9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CardDetailPage;
var _c;
__turbopack_context__.k.register(_c, "CardDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3da41918._.js.map
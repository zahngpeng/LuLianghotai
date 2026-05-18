import React, { useState } from "react";
import { Plus, Search, Edit, FolderTree, Power, PowerOff, ListPlus, ChevronDown, ChevronRight, Eye, ShieldAlert } from "lucide-react";

export default function AdminCategories() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "1": true });

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    {
      id: "C-100",
      code: "FRESH_VEG",
      name: "新鲜蔬菜",
      level: 1,
      status: "启用",
      isFrontend: true,
      isLeaf: false,
      productCount: 450,
      templateCount: 0,
      sort: 1,
      children: [
        {
          id: "C-101",
          code: "LEAF_VEG",
          name: "叶菜类",
          level: 2,
          status: "启用",
          isFrontend: true,
          isLeaf: true,
          productCount: 120,
          templateCount: 2,
          sort: 1,
        },
        {
          id: "C-102",
          code: "ROOT_VEG",
          name: "根茎类",
          level: 2,
          status: "启用",
          isFrontend: true,
          isLeaf: true,
          productCount: 85,
          templateCount: 1,
          sort: 2,
        }
      ]
    },
    {
      id: "C-200",
      code: "FRESH_FRUIT",
      name: "新鲜水果",
      level: 1,
      status: "启用",
      isFrontend: true,
      isLeaf: false,
      productCount: 320,
      templateCount: 0,
      sort: 2,
      children: [
        {
          id: "C-201",
          code: "APPLE",
          name: "苹果",
          level: 2,
          status: "启用",
          isFrontend: true,
          isLeaf: true,
          productCount: 50,
          templateCount: 1,
          sort: 1,
        }
      ]
    },
    {
      id: "C-300",
      code: "MEAT",
      name: "禽畜肉蛋",
      level: 1,
      status: "停用",
      isFrontend: false,
      isLeaf: false,
      productCount: 0,
      templateCount: 0,
      sort: 3,
      children: [
        {
          id: "C-301",
          code: "PORK",
          name: "猪肉",
          level: 2,
          status: "停用",
          isFrontend: false,
          isLeaf: true,
          productCount: 0,
          templateCount: 0,
          sort: 1,
        }
      ]
    }
  ];

  const renderCategoryRow = (cat: any, depth = 0) => {
    const hasChildren = cat.children && cat.children.length > 0;
    const isExpanded = expanded[cat.id];

    return (
      <div key={cat.id} className="group">
        <div className={`flex items-center border-b border-gray-100 hover:bg-red-50/30 transition-colors py-3 px-4 ${depth === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
          <div className="w-1/3 flex items-center gap-2">
            <div style={{ width: depth * 24 }} />
            {hasChildren ? (
              <button onClick={(e) => toggleExpand(cat.id, e)} className="p-1 hover:bg-gray-200 rounded text-gray-500">
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            ) : (
              <div className="w-6" /> // Placeholder for no children
            )}
            <div className={`w-8 h-8 rounded flex flex-col items-center justify-center shrink-0 ${depth === 0 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
              <FolderTree className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-sm flex items-center gap-2">
                {cat.name}
                {!cat.isFrontend && <span className="text-[10px] bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded">隐藏</span>}
              </div>
              <div className="text-xs text-gray-400 font-mono mt-0.5">{cat.code}</div>
            </div>
          </div>
          
          <div className="w-[10%] text-center text-sm text-gray-600">{cat.level}级</div>
          
          <div className="w-[12%] text-center">
            {cat.status === '启用' 
              ? <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs border border-green-200 flex items-center justify-center gap-1 w-16 mx-auto"><Power className="w-3 h-3"/> 启用</span>
              : <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs border border-gray-200 flex items-center justify-center gap-1 w-16 mx-auto"><PowerOff className="w-3 h-3"/> 停用</span>
            }
          </div>
          
          <div className="w-[15%] text-center flex items-center justify-center gap-4 text-sm">
            <div className="flex flex-col items-center">
               <span className="font-bold text-gray-800">{cat.productCount}</span>
               <span className="text-[10px] text-gray-400">关联商品</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex flex-col items-center">
               <span className="font-bold text-gray-800">{cat.templateCount}</span>
               <span className="text-[10px] text-gray-400">参数模板</span>
            </div>
          </div>
          
          <div className="w-[8%] text-center text-sm text-gray-600">{cat.sort}</div>
          
          <div className="flex-1 flex justify-end items-center gap-2 pr-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {depth === 0 && (
              <button className="text-teal-600 hover:text-teal-800 text-xs flex items-center gap-1 bg-teal-50 px-2 py-1.5 rounded">
                 <ListPlus className="w-3 h-3"/> 添加子类目
              </button>
            )}
            <button className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 bg-blue-50 px-2 py-1.5 rounded">
               <Edit className="w-3 h-3"/> 编辑
            </button>
            <button className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 bg-red-50 px-2 py-1.5 rounded">
               <PowerOff className="w-3 h-3"/> 停用
            </button>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="flex flex-col">
            {cat.children.map((child: any) => renderCategoryRow(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><FolderTree className="w-6 h-6 text-red-600"/> 商城类目配置</h2>
          <p className="text-sm text-gray-500 mt-1">管理平台商品分类体系，支持最多3级类目。叶子类目可关联参数模板并挂载商品。</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-red-600 text-white rounded shadow-sm text-sm font-bold hover:bg-red-700 flex items-center gap-2">
            <Plus className="w-4 h-4"/> 新增一级类目
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-sm">
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4 items-center bg-gray-50">
          <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-1.5 w-72 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all shadow-sm">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="输入类目名称 / 编码搜索..." className="bg-transparent outline-none text-sm w-full" />
          </div>
          
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white outline-none focus:border-red-500 shadow-sm">
            <option>所有状态</option>
            <option>已启用</option>
            <option>已停用</option>
          </select>
          
          <div className="ml-auto flex items-center gap-2 text-orange-600 text-xs bg-orange-50 px-3 py-1.5 rounded border border-orange-100">
             <ShieldAlert className="w-4 h-4"/>
             有上架商品的类目无法直接停用
          </div>
        </div>

        <div className="flex bg-gray-100 text-gray-500 text-xs font-bold py-3 px-4 uppercase tracking-wider relative border-b border-gray-200">
           <div className="w-1/3 pl-8">类目名称 / 编码</div>
           <div className="w-[10%] text-center">层级</div>
           <div className="w-[12%] text-center">状态</div>
           <div className="w-[15%] text-center">关联数据</div>
           <div className="w-[8%] text-center">展现排序</div>
           <div className="flex-1 text-right pr-4">操作</div>
        </div>

        <div className="flex flex-col">
          {categories.map(cat => renderCategoryRow(cat))}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Plus, Search, Edit, FileText, Settings2, ShieldCheck, Eye, ChevronDown, ChevronRight, CheckCircle2, LayoutList } from "lucide-react";

export default function AdminTemplates() {
  const tabs = ["全部模板", "生效中", "草稿", "已停用"];
  const [activeTab, setActiveTab] = useState("全部模板");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const templates = [
    {
      id: "TPL-COMMON-001",
      name: "生鲜通用参数模板",
      version: "V1.0",
      category: "所有生鲜 (一级类目)",
      categoryLevel: 1,
      isInherited: false,
      status: "生效",
      isCurrent: true,
      creator: "admin_super",
      updateTime: "2026-05-15 09:30",
      usedCount: 215,
      description: "所有生鲜类目通用的基础参数（如产地、品牌、储藏条件）",
      parameterGroups: [
        {
          name: "通用基础",
          items: [
            { name: "品牌", code: "BRAND", type: "单选", isRequired: true, snapshot: true },
            { name: "产地", code: "ORIGIN", type: "单选", isRequired: true, snapshot: true },
            { name: "储藏条件", code: "STORAGE", type: "单选", isRequired: true, snapshot: false },
          ]
        }
      ]
    },
    {
      id: "TPL-FRUIT-002",
      name: "新鲜水果专属参数",
      version: "V2.1",
      category: "新鲜水果 (二级类目)",
      categoryLevel: 2,
      isInherited: true,
      parentTemplateName: "生鲜通用参数模板",
      status: "生效",
      isCurrent: true,
      creator: "运营_张三",
      updateTime: "2026-05-14 16:45",
      usedCount: 85,
      description: "继承生鲜通用基础，补充水果类需特有的糖度、果径等参数",
      parameterGroups: [
        {
          name: "水果专有属性",
          items: [
            { name: "果径", code: "FRUIT_DIAMETER", type: "单选", unit: "mm", isRequired: true, snapshot: true },
            { name: "糖度", code: "SUGAR_BRIX", type: "数值", unit: "Brix", isRequired: false, snapshot: true },
          ]
        }
      ]
    },
    {
      id: "TPL-FRUIT-001",
      name: "新鲜水果专属参数",
      version: "V2.0",
      category: "新鲜水果 (二级类目)",
      categoryLevel: 2,
      isInherited: true,
      parentTemplateName: "生鲜通用参数模板",
      status: "已停用",
      isCurrent: false,
      creator: "运营_张三",
      updateTime: "2026-04-10 11:20",
      usedCount: 0,
      description: "旧版水果模板，缺少糖度字段",
      parameterGroups: []
    }
  ];

  const filteredTemplates = activeTab === "全部模板" 
    ? templates 
    : templates.filter(t => t.status === (activeTab === '生效中' ? '生效' : activeTab));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "生效": return "bg-green-100 text-green-700 border-green-200";
      case "草稿": return "bg-slate-100 text-slate-700 border-slate-200";
      case "已停用": return "bg-gray-100 text-gray-500 border-gray-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Settings2 className="w-6 h-6 text-indigo-600"/> 模板配置管理</h2>
          <p className="text-sm text-gray-500 mt-1">管理各商品类目的专属参数字段，支持版本控制与增量修改，订单成交后自动生成参数快照。</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded shadow-sm text-sm font-bold hover:bg-indigo-700 flex items-center gap-2">
            <Plus className="w-4 h-4"/> 新建参数模板
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-sm">
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4 items-center bg-gray-50">
          <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-1.5 w-72 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all shadow-sm">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="输入模板名称 / ID/ 类目搜索..." className="bg-transparent outline-none text-sm w-full" />
          </div>
          
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white outline-none focus:border-indigo-500 shadow-sm">
            <option>归属所有一级类目</option>
            <option>新鲜蔬菜</option>
            <option>新鲜水果</option>
          </select>
        </div>

        <div className="flex border-b border-gray-200 text-sm font-medium bg-white">
          {tabs.map((t, i) => (
            <div 
              key={i} 
              onClick={() => setActiveTab(t)}
              className={`px-6 py-3 cursor-pointer transition-colors ${
                activeTab === t 
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/30" 
                  : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold w-12"></th>
                <th className="px-6 py-4 font-bold">模板名称 (模板头)</th>
                <th className="px-6 py-4 font-bold">关联类目</th>
                <th className="px-6 py-4 font-bold text-center">状态 / 版本</th>
                <th className="px-6 py-4 font-bold text-center">使用情况</th>
                <th className="px-6 py-4 font-bold text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTemplates.map((t) => (
                <React.Fragment key={t.id}>
                  <tr className="hover:bg-indigo-50/20 transition-colors group cursor-pointer" onClick={(e) => toggleExpand(t.id, e)}>
                    <td className="px-6 py-4 text-center">
                       {t.parameterGroups.length > 0 && (
                         <div className="text-gray-400 hover:text-indigo-600">
                            {expanded[t.id] ? <ChevronDown className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
                         </div>
                       )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0 border border-indigo-100">
                           <FileText className="w-5 h-5"/>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 flex items-center gap-2">
                             {t.categoryLevel === 1 ? (
                               <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded border border-orange-200 font-bold">1级全局配置</span>
                             ) : (
                               <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded border border-blue-200 font-bold">子类目专属配置</span>
                             )}
                             {t.name}
                             {t.isCurrent && <span className="bg-indigo-100 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded border border-indigo-200 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/>当前生效</span>}
                          </div>
                          <div className="text-xs text-gray-400 font-mono mt-0.5 mb-1">{t.id} • {t.updateTime}</div>
                          <div className="text-xs text-gray-500 line-clamp-1" title={t.description}>{t.description}</div>
                          {t.isInherited && t.parentTemplateName && (
                            <div className="text-[10px] text-gray-500 bg-gray-50 inline-block px-1.5 py-0.5 rounded border border-gray-200 mt-1">
                               继承基类模板：{t.parentTemplateName}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className="text-gray-600 text-sm font-bold bg-gray-50 px-2.5 py-1 rounded border border-gray-200">{t.category}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded text-xs border ${getStatusColor(t.status)}`}>
                        {t.status}
                      </span>
                      <div className="text-xs font-bold text-gray-600 mt-2 bg-gray-50 inline-block px-2 rounded-full border border-gray-200">{t.version}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                       {t.usedCount > 0 ? (
                          <div className="flex flex-col items-center">
                             <span className="font-bold text-indigo-600">{t.usedCount}</span>
                             <span className="text-[10px] text-gray-500">已关联商品</span>
                          </div>
                       ) : (
                          <span className="text-xs text-gray-400">尚未使用</span>
                       )}
                    </td>
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-center items-center gap-2 max-w-[120px] mx-auto opacity-80 group-hover:opacity-100">
                         <button className="text-indigo-600 hover:text-indigo-800 text-xs flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded flex-1 justify-center font-bold">
                           {t.status === '草稿' ? <Edit className="w-4 h-4"/> : (t.isCurrent ? <Edit className="w-4 h-4"/> : <Eye className="w-4 h-4"/>)}
                           {t.status === '草稿' ? '编辑(全量)' : (t.isCurrent ? '管理(增量)' : '查看镜像')}
                         </button>
                      </div>
                    </td>
                  </tr>
                  
                  {expanded[t.id] && t.parameterGroups.length > 0 && (
                    <tr className="bg-gray-50/50">
                      <td></td>
                      <td colSpan={5} className="py-4 pr-6">
                         <div className="bg-white border text-xs border-gray-200 rounded-lg p-4 shadow-inner">
                           <div className="font-bold text-gray-700 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2"><LayoutList className="w-4 h-4 text-indigo-500"/> 参数项配置明细 (参数组层)</div>
                           
                           <div className="grid grid-cols-3 gap-6">
                              {t.parameterGroups.map((group, gIdx) => (
                                 <div key={gIdx}>
                                    <div className="font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded text-xs mb-3 inline-block">【{group.name}】</div>
                                    <div className="space-y-2">
                                       {group.items.map((item, iIdx) => (
                                          <div key={iIdx} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded border border-gray-100">
                                            <div>
                                              <div className="font-bold text-gray-700">{item.name} <span className="text-gray-400 font-normal">({item.code})</span></div>
                                              <div className="text-[10px] text-gray-500 mt-1 flex gap-2">
                                                 <span className="bg-white border px-1 rounded">{item.type}</span>
                                                 {item.unit && <span className="bg-white border px-1 rounded text-orange-600">单位:{item.unit}</span>}
                                              </div>
                                            </div>
                                            <div className="flex flex-col gap-1 items-end text-[10px]">
                                               {item.isRequired ? <span className="text-red-500 bg-red-50 px-1 rounded">必填</span> : <span className="text-gray-400">非必填</span>}
                                               {item.snapshot && <span className="text-indigo-600 bg-indigo-50 px-1 rounded">记入快照</span>}
                                            </div>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              ))}
                           </div>
                         </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          
          <div className="p-4 bg-orange-50 border-t border-orange-100 m-4 rounded flex gap-3 text-orange-800 text-sm">
             <ShieldCheck className="w-5 h-5 shrink-0 text-orange-500"/>
             <div>
                <strong>模板更新强控规则：</strong> <br/>
                已被商品使用的参数模板（状态为"生效"&"当前生效"）只能进行<strong>增量修改</strong>（追加新字段、新参数组），<strong>禁止删除已使用参数</strong>。<br/>
                涉及颠覆性结构修改时，应新建版本（提升模板版本号），重新关联类目并生效。历史单据所关联的商品快照，将固定取其下单时的模板镜像。
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

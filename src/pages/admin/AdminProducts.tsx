import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, Filter, Edit, Eye, ArrowUpCircle, ArrowDownCircle, ShieldBan, MoreHorizontal, FileText, Settings, X, UploadCloud, FileJson } from "lucide-react";

const CreateProductModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto pt-10 pb-10">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl shrink-0">
          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Plus className="w-5 h-5 text-red-600"/> 创建新商品主档 <span className="text-xs font-normal bg-orange-100 text-orange-600 px-2 py-0.5 rounded border border-orange-200">一期单SKU模式</span>
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded transition"><X className="w-5 h-5"/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 bg-gray-50/30">
           {/* Section 1 */}
           <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
             <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2 border-l-4 border-red-500 pl-2">步骤1：选择所属类目</h4>
             <div className="grid grid-cols-3 gap-4">
                <div>
                   <label className="block text-xs font-bold text-gray-600 mb-1.5">一级类目</label>
                   <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none focus:border-red-500 transition-colors">
                     <option>请选择</option>
                     <option>新鲜水果</option>
                     <option>新鲜蔬菜</option>
                   </select>
                </div>
                <div>
                   <label className="block text-xs font-bold text-gray-600 mb-1.5">二级类目</label>
                   <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none focus:border-red-500 transition-colors">
                     <option>请选择 (先选一级)</option>
                     <option>苹果</option>
                   </select>
                </div>
                <div className="flex items-end pb-1">
                   <div className="text-xs text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded border border-green-100 w-full justify-center">
                     <FileJson className="w-4 h-4"/> 自动匹配模板：TPL-FRUIT-002 (V2.1)
                   </div>
                </div>
             </div>
           </section>

           {/* Section 2 */}
           <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
             <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2 border-l-4 border-red-500 pl-2">步骤2：完善基础信息</h4>
             <div className="space-y-4">
               <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">商品名称 <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="请输入商品完整名称，建议包含品牌、核心规格等" className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-500 transition-colors" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">供应商选择 <span className="text-red-500">*</span></label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white outline-none focus:border-red-500 transition-colors">
                      <option>请选择供应商库中企业</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">产地/货源地 <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="如：云南 陆良" className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-red-500 transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5">商品主图 <span className="text-red-500">*</span></label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 text-gray-400 hover:bg-gray-100 hover:border-red-400 transition-colors cursor-pointer">
                     <UploadCloud className="w-8 h-8 mb-2" />
                     <p className="text-sm font-bold">点击上传主图</p>
                     <p className="text-xs mt-1">支持 JPG/PNG，限 2MB 内大小，尺寸建议 800x800</p>
                  </div>
               </div>
             </div>
           </section>

           {/* Section 3 */}
           <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
             <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2 border-l-4 border-red-500 pl-2">步骤3：交易与参数配置 (根据类目模板动态生成)</h4>
             
             <div className="bg-blue-50/50 p-4 border border-blue-100 rounded mb-6">
                <div className="text-sm font-bold text-blue-800 mb-3">规格与价格 (单SKU)</div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">对外展示规格 <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="例如: 5kg/箱" className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">销售单价 (元) <span className="text-red-500">*</span></label>
                    <input type="number" placeholder="0.00" className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">销售单位 <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="例如: 箱/kg" className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm outline-none focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1.5">初始虚拟库存总量 <span className="text-red-500">*</span></label>
                    <input type="number" placeholder="0" className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm outline-none focus:border-red-500" />
                  </div>
                </div>
             </div>

             <div className="gap-6 grid grid-cols-2">
                <div className="border border-gray-200 rounded p-4">
                  <div className="text-xs font-bold mb-3 pb-1 border-b border-gray-100 text-gray-700">模板参数：基础规格</div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">果径 (mm) <span className="text-red-500">*</span></label>
                      <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-red-500">
                        <option>70-75mm</option>
                        <option>75-80mm</option>
                        <option>80mm以上</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">糖度 (Brix)</label>
                      <input type="text" placeholder="选填，如: 12-14" className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-red-500" />
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded p-4">
                  <div className="text-xs font-bold mb-3 pb-1 border-b border-gray-100 text-gray-700">模板参数：检测标准</div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">农残检测报告 (图片)</label>
                      <div className="border border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:bg-gray-50">
                         <span className="text-xs text-gray-400">点击上传报告扫描件</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>

           </section>

        </div>
        
        <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end gap-3 rounded-b-xl shrink-0">
          <button onClick={onClose} className="px-6 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 font-medium">取消</button>
          <button onClick={onClose} className="px-6 py-2 bg-slate-800 text-white rounded text-sm hover:bg-slate-900 font-bold">存为草稿</button>
          <button onClick={onClose} className="px-8 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 font-bold shadow-sm">提交审核</button>
        </div>
      </div>
    </div>
  );
};

export default function AdminProducts() {
  const navigate = useNavigate();
  const tabs = ["全部商品", "草稿", "待审核", "待上架", "已上架", "已下架", "已禁售"];
  const [activeTab, setActiveTab] = useState("全部商品");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const mockProducts = [
    {
      id: "PRD-100801",
      name: "富源大河乌猪 农家散养黑猪肉 纯瘦肉 500g装",
      category: "禽畜肉蛋 > 猪肉",
      price: 42.00,
      totalStock: 5000,
      availableStock: 4850,
      lockedStock: 150,
      status: "已上架",
      img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-14 10:30"
    },
    {
      id: "PRD-100802",
      name: "新鲜采摘 露天种植圆白菜 农家直供 10斤装",
      category: "新鲜蔬菜 > 叶菜类",
      price: 15.90,
      totalStock: 10000,
      availableStock: 10000,
      lockedStock: 0,
      status: "待审核",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-15 09:12"
    },
    {
      id: "PRD-100803",
      name: "昭通冰糖心苹果 高山纯天然原生态一箱(8斤)",
      category: "新鲜水果 > 苹果",
      price: 39.90,
      totalStock: 2000,
      availableStock: 2000,
      lockedStock: 0,
      status: "待上架",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-13 14:20"
    },
    {
      id: "PRD-100804",
      name: "东北长粒香有机大米 软糯香甜 10斤装",
      category: "米面粮油 > 大米",
      price: 45.00,
      totalStock: 8000,
      availableStock: 0,
      lockedStock: 0,
      status: "已下架",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-10 11:45"
    },
    {
      id: "PRD-100805",
      name: "陆良农家压榨菜籽油 传统工艺 5L装",
      category: "米面粮油 > 食用油",
      price: 68.00,
      totalStock: 500,
      availableStock: 20,
      lockedStock: 480,
      status: "已禁售",
      img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-08 16:30"
    },
    {
      id: "PRD-100806",
      name: "【测试】商品草稿数据展示",
      category: "地方特产馆",
      price: 0.00,
      totalStock: 0,
      availableStock: 0,
      lockedStock: 0,
      status: "草稿",
      img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      updateTime: "2026-05-15 10:00"
    }
  ];

  const filteredProducts = activeTab === "全部商品" 
    ? mockProducts 
    : mockProducts.filter(p => p.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "已上架": return "bg-green-100 text-green-700 border-green-200";
      case "待审核": return "bg-orange-100 text-orange-700 border-orange-200";
      case "待上架": return "bg-blue-100 text-blue-700 border-blue-200";
      case "已下架": return "bg-gray-100 text-gray-700 border-gray-200";
      case "已禁售": return "bg-red-100 text-red-700 border-red-200";
      case "草稿": return "bg-slate-100 text-slate-700 border-slate-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const handleAction = (action: string) => {
    alert(`执行操作: ${action}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">平台商品管理库</h2>
          <p className="text-sm text-gray-500 mt-1">管理自营商品生命周期（创建、审核、定价、库存调整、上下架）</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate('/admin/templates')} className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            参数模板管理
          </button>
          <button onClick={() => navigate('/admin/categories')} className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            类目管理
          </button>
          <button onClick={() => setIsCreateModalOpen(true)} className="px-4 py-2 bg-red-600 text-white rounded shadow-sm text-sm font-bold hover:bg-red-700 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            创建新商品
          </button>
        </div>
      </div>

      <CreateProductModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden text-sm">
        {/* Filters */}
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4 items-center bg-gray-50">
          <div className="flex items-center bg-white border border-gray-300 rounded px-3 py-1.5 w-80 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500 transition-all shadow-sm">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="输入商品名称 / 编码搜索..." className="bg-transparent outline-none text-sm w-full" />
          </div>
          
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white outline-none focus:border-red-500 shadow-sm">
            <option>所有一级类目</option>
            <option>新鲜蔬菜</option>
            <option>新鲜水果</option>
            <option>禽畜肉蛋</option>
            <option>米面粮油</option>
          </select>
          
          <select className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white outline-none focus:border-red-500 shadow-sm">
            <option>库存状态: 全部</option>
            <option>库存充足 (&gt;100)</option>
            <option>库存紧张 (&lt;=100)</option>
            <option>已售罄 (0)</option>
          </select>

          <button className="ml-auto text-gray-600 border border-gray-300 bg-white px-4 py-1.5 rounded hover:text-red-600 hover:border-red-400 transition-colors shadow-sm font-medium">
            重置筛选
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 text-sm font-medium bg-white">
          {tabs.map((t, i) => (
            <div 
              key={i} 
              onClick={() => setActiveTab(t)}
              className={`px-6 py-3 cursor-pointer transition-colors ${
                activeTab === t 
                  ? "text-red-600 border-b-2 border-red-600 bg-red-50/30" 
                  : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
              }`}
            >
              {t} 
              {t === "待审核" && <span className="ml-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full inline-block scale-90">1</span>}
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 text-xs">
              <tr>
                <th className="px-6 py-4 font-bold w-12 text-center">ID</th>
                <th className="px-6 py-4 font-bold">商品信息</th>
                <th className="px-6 py-4 font-bold">类目参数</th>
                <th className="px-6 py-4 font-bold text-right">销售价</th>
                <th className="px-6 py-4 font-bold text-center">虚拟库存 (总/可/锁)</th>
                <th className="px-6 py-4 font-bold text-center">状态</th>
                <th className="px-6 py-4 font-bold text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-20 text-center text-gray-500">
                    暂无符合条件的商品数据
                  </td>
                </tr>
              ) : (
                filteredProducts.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-center">
                      <div className="text-xs text-gray-400 font-mono">{p.id.split('-')[1]}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded border border-gray-200 overflow-hidden shrink-0 bg-white">
                          <img src={p.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div 
                            className="font-bold text-gray-800 hover:text-red-600 cursor-pointer line-clamp-1 mb-1"
                            title={p.name}
                          >
                            {p.name}
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">{p.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-600 text-xs">{p.category}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {p.price > 0 ? (
                        <div className="font-bold text-red-600 whitespace-nowrap">
                          ¥ {p.price.toFixed(2)}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-xs">
                         <span className="text-gray-800 font-bold">{p.totalStock}</span>
                         <span className="text-gray-300 mx-1">/</span>
                         <span className={p.availableStock > 0 ? "text-green-600 font-bold" : "text-red-500 font-bold"}>{p.availableStock}</span>
                         <span className="text-gray-300 mx-1">/</span>
                         <span className="text-gray-500">{p.lockedStock}</span>
                      </div>
                      {p.availableStock === 0 && p.status === '已上架' && (
                        <div className="text-[10px] text-red-500 mt-1">虚库售罄</div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2.5 py-1 rounded text-xs border ${getStatusColor(p.status)}`}>
                        {p.status}
                      </span>
                      <div className="text-[10px] text-gray-400 mt-1 whitespace-nowrap">{p.updateTime}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center gap-2 flex-wrap max-w-[140px] mx-auto">
                         {p.status === '草稿' && (
                           <>
                             <button onClick={() => handleAction('编辑')} className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 w-full justify-center"><Edit className="w-3 h-3"/> 编辑</button>
                             <button onClick={() => handleAction('提交审核')} className="bg-red-600 text-white hover:bg-red-700 px-2 py-1 rounded text-xs w-full">提交审核</button>
                           </>
                         )}
                         
                         {p.status === '待审核' && (
                           <>
                             <button onClick={() => handleAction('去审核')} className="text-orange-600 border border-orange-600 hover:bg-orange-50 px-2 py-1 rounded text-xs w-full text-center">去审核</button>
                           </>
                         )}
                         
                         {p.status === '待上架' && (
                           <>
                             <button onClick={() => handleAction('上架')} className="bg-green-600 text-white hover:bg-green-700 px-2 py-1 rounded text-xs w-full font-bold flex justify-center items-center gap-1"><ArrowUpCircle className="w-3 h-3" /> 上架</button>
                           </>
                         )}
                         
                         {p.status === '已上架' && (
                           <>
                             <button onClick={() => handleAction('编辑控制')} className="text-blue-600 hover:text-blue-800 text-xs">编辑</button>
                             <button onClick={() => handleAction('下架')} className="text-gray-600 hover:text-red-600 text-xs flex items-center gap-1"><ArrowDownCircle className="w-3 h-3"/> 下架</button>
                           </>
                         )}

                         {(p.status === '已下架' || p.status === '已禁售') && (
                           <>
                             <button onClick={() => handleAction('编辑')} className="text-blue-600 hover:text-blue-800 text-xs">编辑</button>
                             <button onClick={() => handleAction('日志')} className="text-gray-500 hover:text-gray-700 text-xs">日志</button>
                           </>
                         )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


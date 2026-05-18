import { Plus, Target } from "lucide-react";

export default function AdminProcurements() {
  const tabs = ["平台进行中需求", "待比价定标", "已生成采购单", "已完结采购"];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-teal-800 flex items-center gap-2"><Target className="w-6 h-6"/> 平台自营采购调度中心</h2>
          <p className="text-sm text-gray-500 mt-1">由平台发布采购需求单，接受上游农场/合作社报价，定标并生成向上采购订单</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-teal-600 text-white rounded shadow-sm text-sm font-bold hover:bg-teal-700 flex items-center gap-2"><Plus className="w-4 h-4"/> 发布向供应商采购需求</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-sm">
         <div className="flex border-b border-gray-200 text-sm font-medium bg-gray-50">
           {tabs.map((t, i) => (
             <div key={i} className={`px-6 py-3 cursor-pointer ${i === 1 ? "text-teal-600 border-b-2 border-teal-600 bg-white" : "text-gray-600 hover:text-teal-600"}`}>
               {t} {i===1 && <span className="ml-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>}
             </div>
           ))}
         </div>

         <div className="p-6 bg-teal-50/20 border-b border-gray-100">
           <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">待比价定标的求购单 (系统聚合) <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded border border-orange-200">加急</span></h3>
           
           <div className="space-y-4">
             {[1,2,3].map(i => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition flex gap-6">
                  <div className="w-72 border-r border-gray-100 pr-4">
                     <div className="text-xs text-gray-400 mb-1 font-mono">求购单号: PR-REQ-2026-00{i}</div>
                     <h4 className="font-bold text-gray-800 text-lg mb-2">有机白菜 {i*10}吨 紧急大宗采购</h4>
                     <div className="text-xs text-gray-500 space-y-1 bg-gray-50 p-2 rounded border border-gray-100">
                        <div><span className="text-gray-400">品质要求:</span> A级生鲜 / 无虫害病斑</div>
                        <div><span className="text-gray-400">交货期限:</span> 2026-05-{(18 + i).toString().padStart(2, '0')} 前必达</div>
                        <div><span className="text-gray-400">收货仓库:</span> 陆良物流中心1号库</div>
                     </div>
                  </div>
                  
                  <div className="flex-1">
                     <div className="flex justify-between items-center mb-3">
                       <div className="text-sm font-bold text-gray-600">上游已响应 <span className="text-teal-600 text-lg mx-1">{i+2}</span> 家供应商报价</div>
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                         {['陆良阳光农合社', '德康合作农场A区', '散户供应商王师傅'].slice(0, i+2).map((vendor, vIdx) => (
                           <div key={vIdx} className={`border p-3 rounded cursor-pointer transition ${vIdx === 0 ? 'border-teal-500 bg-teal-50 shadow-sm relative overflow-hidden' : 'border-gray-200 hover:border-teal-300'}`}>
                              {vIdx === 0 && <div className="absolute top-0 right-0 bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded-bl font-bold">系统最优价</div>}
                              <div className="font-bold text-gray-800 text-xs truncate mb-1">{vendor}</div>
                              <div className="text-lg font-black text-teal-600 mt-2">¥ {(1200 - vIdx*50).toFixed(2)}<span className="text-xs text-gray-500 font-normal ml-1">/吨</span></div>
                              <div className="text-[10px] text-gray-400 mt-1">支持账期付款 • 本地运力</div>
                           </div>
                         ))}
                     </div>
                  </div>
                  
                  <div className="w-32 border-l border-gray-100 pl-4 flex flex-col justify-center gap-2">
                     <button className="bg-teal-600 text-white font-bold py-2 rounded shadow hover:bg-teal-700 text-sm">比价并定标</button>
                     <button className="border border-gray-300 text-gray-600 font-bold py-2 rounded hover:bg-gray-50 text-sm">打回重新报价</button>
                  </div>
                </div>
             ))}
           </div>
         </div>
      </div>
    </div>
  );
}

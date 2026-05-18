import { Search, Filter, Download } from "lucide-react";

export default function AdminOrders() {
  const tabs = ["全部订单", "待审核", "待发货", "配送中", "买家已签收", "售后处理"];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">平台销售订单管理</h2>
          <p className="text-sm text-gray-500 mt-1">处理ToB商城客户提交的采购订单，安排物流发货及履约跟踪</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium hover:bg-gray-50 flex items-center gap-2"><Download className="w-4 h-4"/> 导出订单流水</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded shadow-sm text-sm font-bold hover:bg-red-700">后台代客下单</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="p-4 border-b border-gray-100 flex flex-wrap gap-4 items-center bg-gray-50/50">
            <div className="flex items-center bg-white border border-gray-200 rounded px-3 py-1.5 w-72">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input type="text" placeholder="输入订单号 / 采购商手机号..." className="bg-transparent outline-none text-sm w-full" />
            </div>
            <select className="border border-gray-200 rounded px-3 py-1.5 text-sm bg-white outline-none">
               <option>支付状态过滤</option>
               <option>在线已支付</option>
               <option>平台授信/月结</option>
               <option>未支付</option>
            </select>
            <button className="ml-auto flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 bg-white border border-gray-200 px-3 py-1.5 rounded"><Filter className="w-4 h-4"/> 更多高级筛选</button>
         </div>

         <div className="flex border-b border-gray-200 text-sm font-medium">
           {tabs.map((t, i) => (
             <div key={i} className={`px-6 py-3 cursor-pointer ${i === 0 ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-red-600"}`}>
               {t} {i===2 && <span className="ml-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">12</span>}
             </div>
           ))}
         </div>

         <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
               <thead className="bg-gray-50 text-gray-500 border-b border-gray-200 text-xs">
                 <tr>
                    <th className="px-6 py-4 font-bold">关联单号 / 时间</th>
                    <th className="px-6 py-4 font-bold">采购商信息 (买方)</th>
                    <th className="px-6 py-4 font-bold">商城订单金额</th>
                    <th className="px-6 py-4 font-bold">结算方式</th>
                    <th className="px-6 py-4 font-bold">平台履约状态</th>
                    <th className="px-6 py-4 font-bold text-center">操作指令</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {[1,2,3,4,5].map(i => (
                   <tr key={i} className="hover:bg-red-50/10 transition-colors">
                     <td className="px-6 py-4">
                        <div className="font-mono font-bold text-gray-800 hover:text-red-600 cursor-pointer mb-1">SO-20260515-{i.toString().padStart(4, '0')}</div>
                        <div className="text-xs text-gray-400">2026-05-15 10:30</div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="font-bold text-gray-800">陆良县中心学校食堂{i}点</div>
                        <div className="text-xs text-gray-500 mt-1">采购人_王老师 • 138****000{i}</div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="font-bold text-red-600 text-base">¥ {(2450.00 * i).toFixed(2)}</div>
                     </td>
                     <td className="px-6 py-4">
                         <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded text-xs">对公月结</span>
                     </td>
                     <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-orange-600 font-bold text-xs"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>待系统审核</span>
                     </td>
                     <td className="px-6 py-4 text-center">
                        <button className="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 text-xs font-bold w-full mb-1 border border-red-700 border-b-2">审核并调度发货</button>
                        <button className="text-gray-500 hover:text-red-600 text-xs w-full">订单详情 / 轨迹</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}

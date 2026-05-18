import { TrendingUp, Users, ShoppingCart, Truck, Wallet, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const kpis = [
    { title: "今日自营销售额 (元)", value: "145,200.00", trend: "+12.5%", isUp: true, icon: <Wallet className="text-red-600" /> },
    { title: "今日销售订单数", value: "328", trend: "+5.2%", isUp: true, icon: <ShoppingCart className="text-blue-600" /> },
    { title: "待处理采购需求", value: "12", trend: "-2.1%", isUp: false, icon: <AlertCircle className="text-orange-600" /> },
    { title: "在途物流单", value: "45", trend: "+1.1%", isUp: true, icon: <Truck className="text-green-600" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">平台运营数据看板</h2>
          <p className="text-sm text-gray-500 mt-1">陆良物流园B2B业务全景监控 (数据已接入农业农村厅大屏接口)</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium hover:bg-gray-50">导出今日报表</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded shadow-sm text-sm font-bold hover:bg-red-700">大屏全屏模式</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {kpis.map((k, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
             <div className="absolute top-4 right-4 bg-gray-50 p-3 rounded-full">{k.icon}</div>
             <h3 className="text-gray-500 text-sm font-medium mb-4">{k.title}</h3>
             <div className="text-3xl font-black text-gray-800 mb-2">{k.value}</div>
             <div className={`text-xs font-medium ${k.isUp ? 'text-green-600' : 'text-red-500'} flex items-center gap-1`}>
               {k.isUp ? <TrendingUp className="w-3 h-3"/> : <TrendingUp className="w-3 h-3 rotate-180"/>}
               {k.trend} <span className="text-gray-400 font-normal ml-1">较昨日</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Sales Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4">近30天自营交易走势</h3>
          <div className="flex-1 bg-gray-50 border border-gray-100 rounded flex items-center justify-center text-gray-400 w-full relative overflow-hidden">
             <div className="absolute inset-0 flex items-end justify-between px-8 pb-8 pt-12 gap-2 opacity-30">
               {[40, 60, 45, 80, 50, 90, 70, 100, 85, 120, 95, 110].map((h, i) => (
                  <div key={i} className="w-full bg-red-500 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%`}}></div>
               ))}
             </div>
             <span className="relative z-10 font-bold">图表组件加载中...</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4">最新采购商下单动态</h3>
          <div className="flex-1 overflow-auto space-y-4">
             {[1,2,3,4,5].map(i => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 px-2 rounded">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center font-bold shadow-sm border border-red-100">买</div>
                    <div>
                      <div className="text-sm font-bold text-gray-800 mb-1">采购商_企业食堂客户_{i}</div>
                      <div className="text-xs text-gray-500">SO-20260515-00{i} • 新鲜蔬菜大宗采购</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-red-600">¥ 12,500.00</div>
                    <div className="text-xs text-blue-500 mt-1">待平台发货</div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

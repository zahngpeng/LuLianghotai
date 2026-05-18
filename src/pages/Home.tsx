import { ChevronRight } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "新鲜蔬菜", sub: ["根茎类", "叶菜类", "茄果类", "菌菇类", "葱蒜类"] },
    { name: "时令水果", sub: ["苹果/梨", "柑橘/橙柚", "浆果类", "热带水果", "瓜果类"] },
    { name: "禽畜肉蛋", sub: ["猪肉", "牛肉", "羊肉", "禽类", "蛋类"] },
    { name: "米面粮油", sub: ["大米", "面粉", "食用油", "杂粮", "干货"] },
    { name: "水产海鲜", sub: ["淡水鱼", "海鱼", "虾蟹", "贝类", "干货"] },
    { name: "加工食品", sub: ["速冻食品", "熟食", "调味品", "饮料", "零食"] },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-4">
          <div className="w-64 bg-white border border-gray-200 shrink-0 shadow-sm relative -mt-[1px] z-30">
            {categories.map((c, i) => (
              <div key={i} className="px-4 py-3 hover:bg-red-50 cursor-pointer group flex items-center justify-between border-b border-gray-100 last:border-0 relative">
                <div>
                  <div className="font-bold text-gray-800 group-hover:text-red-600 transition">{c.name}</div>
                  <div className="text-xs text-gray-500 mt-1 flex gap-2">
                    {c.sub.slice(0, 3).map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600" />
                
                {/* Popout menu */}
                <div className="absolute left-64 top-0 w-[600px] min-h-full bg-white border border-gray-200 shadow-xl hidden group-hover:block z-50 p-6">
                  <div className="font-bold text-lg text-gray-800 mb-4">{c.name}</div>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {c.sub.map(s => (
                      <span key={s} className="hover:text-red-600 cursor-pointer">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 bg-gradient-to-tr from-red-600 to-orange-500 rounded-lg p-12 text-white flex flex-col justify-center relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm mb-4">源头直采 · 品质严选</div>
                <h2 className="text-4xl font-black mb-4">陆良优质农产品<br/>直通企业食堂</h2>
                <p className="text-lg opacity-90 mb-8 max-w-md">依托"滇中粮仓"核心产区优势，省去中间环节，为企业采购提供更优性价比。</p>
                <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition shadow-lg">立即采购</button>
              </div>
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute right-20 top-10 w-64 h-64 bg-orange-400/20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 h-32">
              {[
                { title: '源头直发', desc: '产地直供缩短链路', bg: 'bg-green-50' },
                { title: '企业集采', desc: '大宗采购更有优势', bg: 'bg-blue-50' },
                { title: '品质品控', desc: '多重质检安全放心', bg: 'bg-purple-50' },
                { title: '物流配送', desc: '全程冷链快速达', bg: 'bg-orange-50' },
              ].map((item, i) => (
                <div key={i} className={`${item.bg} rounded-lg p-4 flex flex-col justify-center`}>
                  <div className="font-bold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
{/* 楼层1 */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="w-1.5 h-6 bg-red-600 rounded"></span> 新鲜蔬菜
            </h3>
            <p className="text-gray-500 text-sm mt-1">当日采摘 基地直供</p>
          </div>
          <a href="/list?cat=veg" className="text-sm text-gray-500 hover:text-red-600 flex items-center">查看更多 <ChevronRight className="w-4 h-4"/></a>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
           <div className="bg-green-600 text-white p-6 rounded-lg flex flex-col justify-between">
              <div>
                 <h4 className="text-xl font-bold mb-2">蔬菜专区</h4>
                 <p className="text-sm opacity-80">每日清晨直采<br/>品质有保障</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm w-max transition">进入专区</button>
           </div>
           
           {[
             { name: "陆良高山娃娃菜", price: "45.00", unit: "箱", img: "🥬", tag: "热销" },
             { name: "本地新鲜大白菜", price: "1.20", unit: "kg", img: "🥬", tag: "特价" },
             { name: "精品土豆（黄心）", price: "2.50", unit: "kg", img: "🥔" },
             { name: "温室圆茄子", price: "3.80", unit: "kg", img: "🍆" },
           ].map((p, i) => (
             <div key={i} className="bg-white p-4 rounded-lg flex flex-col border border-gray-100 hover:shadow-lg transition group cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition relative">
                   {p.tag && <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{p.tag}</div>}
                   {p.img}
                </div>
                <div className="font-bold text-gray-800 line-clamp-2">{p.name}</div>
                <div className="mt-auto pt-4 flex items-baseline gap-1 text-red-600">
                   <span className="font-bold">¥</span>
                   <span className="text-xl font-bold">{p.price}</span>
                   <span className="text-xs text-gray-500">/{p.unit}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

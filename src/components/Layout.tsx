import { Outlet, Link, useNavigate } from 'react-router';
import { Search, ShoppingCart, User, MapPin, ChevronDown, Phone } from 'lucide-react';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-500 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> 云南省 陆良县</span>
            <span>欢迎来到陆良物流园B2B农产品交易平台！</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="hover:text-red-600 transition">请登录</Link>
            <Link to="/register" className="hover:text-red-600 transition">免费注册</Link>
            <span className="w-px h-3 bg-gray-300"></span>
            <Link to="/admin" className="hover:text-red-600 transition text-red-600 font-bold">进入运营后台</Link>
            <span className="w-px h-3 bg-gray-300"></span>
            <div className="flex items-center gap-1 hover:text-red-600 cursor-pointer transition">
              我的订单 <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 font-bold text-red-600">
              <Phone className="w-3 h-3" /> 400-888-8888
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6 max-w-7xl flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
             <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center font-bold text-2xl text-white shadow-md border-b-2 border-red-700">德</div>
             <div>
               <h1 className="text-2xl font-black tracking-wider text-gray-800">陆良物流园</h1>
               <p className="text-xs text-red-600 font-bold tracking-widest mt-0.5">B2B农产品交易平台</p>
             </div>
          </Link>

          <div className="flex-1 max-w-3xl flex items-center">
             <div className="flex w-full">
               <div className="relative flex-1">
                 <input 
                   type="text" 
                   placeholder="搜索生鲜蔬菜、水果、农副产品..." 
                   className="w-full border-2 border-red-500 rounded-l-lg py-3 pl-4 pr-10 outline-none focus:ring-2 focus:ring-red-200 transition"
                 />
               </div>
               <button className="bg-red-600 hover:bg-red-700 text-white px-8 font-bold rounded-r-lg transition-colors flex items-center gap-2">
                 <Search className="w-5 h-5" />
                 搜索
               </button>
             </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
             <button onClick={() => navigate('/cart')} className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-5 py-3 rounded-lg font-bold transition">
               <ShoppingCart className="w-5 h-5" />
               进货单
               <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">0</span>
             </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-100">
           <div className="container mx-auto px-4 max-w-7xl flex">
              <div className="bg-red-600 text-white w-64 py-3 px-4 font-bold flex items-center justify-between cursor-pointer">
                 全部商品分类
                 <ChevronDown className="w-4 h-4" />
              </div>
              <nav className="flex items-center gap-8 px-8 font-bold text-gray-700">
                 <Link to="/" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition">首页</Link>
                 <Link to="/list?cat=veg" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition">新鲜蔬菜</Link>
                 <Link to="/list?cat=fruit" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition">时令水果</Link>
                 <Link to="/list?cat=meat" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition">禽畜肉蛋</Link>
                 <Link to="/list?cat=grain" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition">米面粮油</Link>
                 <Link to="/procurement" className="hover:text-red-600 py-3 border-b-2 border-transparent hover:border-red-600 transition text-red-600">平台集采大厅</Link>
              </nav>
           </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-5 gap-8 border-b border-slate-700 pb-8 mb-8">
           <div className="col-span-2">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-lg text-white">德</div>
               <span className="text-xl font-bold text-white">陆良物流园B2B平台</span>
             </div>
             <p className="text-sm mb-4 leading-relaxed">
               由德康粮油运营，立足陆良“滇中粮仓”优势，打造可信赖的农产品供应链服务体系，为全省企事业单位食堂、商超提供优质安全的农产品直供服务。
             </p>
             <div className="flex gap-4">
               <span className="text-xs border border-slate-700 px-2 py-1 rounded">官方微信</span>
               <span className="text-xs border border-slate-700 px-2 py-1 rounded">采购商入驻</span>
             </div>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4">采购指南</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition">企业采购注册</a></li>
               <li><a href="#" className="hover:text-white transition">下单演示流</a></li>
               <li><a href="#" className="hover:text-white transition">对公结算说明</a></li>
               <li><a href="#" className="hover:text-white transition">配送范围及运费</a></li>
             </ul>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4">售后服务</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition">验货与签收</a></li>
               <li><a href="#" className="hover:text-white transition">生鲜售后标准</a></li>
               <li><a href="#" className="hover:text-white transition">退换货流程</a></li>
               <li><a href="#" className="hover:text-white transition">发票制度</a></li>
             </ul>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-4">联系我们</h4>
             <ul className="space-y-2 text-sm">
               <li className="flex items-start gap-2">
                 <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                 <span>400-888-8888<br/><span className="text-xs text-slate-500">周一至周日 8:00-18:00</span></span>
               </li>
               <li className="flex items-start gap-2 mt-2">
                 <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                 <span>云南省曲靖市陆良县物流园区1号栋</span>
               </li>
             </ul>
           </div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm">
           © 2026 陆良德康粮油贸易有限公司 版权所有 | 滇ICP备2026xxxxxx号-1
        </div>
      </footer>
    </div>
  );
}

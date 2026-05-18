import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Truck, 
  Users, 
  BadgeDollarSign, 
  Settings,
  Bell,
  Search,
  LogOut,
  Target,
  FolderTree,
  Settings2,
  ChevronDown,
  ChevronRight
} from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();
  
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(true);

  const navItems = [
    { name: "数据看板", path: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { 
      name: "商品管理", 
      icon: <Package className="w-5 h-5" />,
      subItems: [
        { name: "商品库管理", path: "/admin/products" },
        { name: "商品类目配置", path: "/admin/categories" },
        { name: "参数模板配置", path: "/admin/templates" },
      ]
    },
    { name: "销售订单管理", path: "/admin/orders", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "平台采购管理", path: "/admin/procurements", icon: <Target className="w-5 h-5" /> },
    { name: "物流调度管理", path: "/admin/logistics", icon: <Truck className="w-5 h-5" /> },
    { name: "客户(采/供)管理", path: "/admin/customers", icon: <Users className="w-5 h-5" /> },
    { name: "平台财务管理", path: "/admin/finance", icon: <BadgeDollarSign className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col transition-all z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-100 bg-white">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-lg mr-3 shadow-sm text-white">德</div>
          <h1 className="text-lg font-bold tracking-wider text-gray-800">平台运营后台</h1>
        </div>
        
        <div className="p-4 space-y-1 flex-1 overflow-y-auto mt-2">
          {navItems.map((item, index) => {
            if (item.subItems) {
              const isAnySubActive = item.subItems.some(sub => location.pathname === sub.path || location.pathname.startsWith(sub.path));
              return (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                      isAnySubActive && !isProductMenuOpen
                        ? "bg-red-50 text-red-600 font-bold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    {isProductMenuOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                  {isProductMenuOpen && (
                    <div className="pl-11 space-y-1 mt-1">
                      {item.subItems.map((subItem) => {
                        const isActive = location.pathname === subItem.path || location.pathname.startsWith(subItem.path);
                        return (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                              isActive 
                                ? "bg-red-50 text-red-600 font-bold" 
                                : "text-gray-500 hover:bg-gray-50 hover:text-red-600"
                            }`}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-red-50 text-red-600 font-bold" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-red-600"
                }`}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-100 space-y-1">
          <button className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
            <Settings className="w-5 h-5" />
            <span>系统配置</span>
          </button>
          <Link to="/" className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors text-sm">
            <LogOut className="w-5 h-5" />
            <span>返回商城</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10 shrink-0">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 border border-gray-200 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition-all">
             <Search className="w-4 h-4 text-gray-400 mr-2" />
             <input type="text" placeholder="搜索单号 / 商品 / 各种信息..." className="bg-transparent outline-none text-sm w-full" />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-gray-700 transition">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</span>
            </button>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
               <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 border border-red-200 flex items-center justify-center font-bold text-sm">超管</div>
               <div className="flex flex-col">
                 <span className="text-sm font-bold text-gray-800">平台管理员</span>
                 <span className="text-xs text-gray-400">admin_super</span>
               </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6 lg:p-8">
           <Outlet />
        </main>
      </div>
    </div>
  );
}

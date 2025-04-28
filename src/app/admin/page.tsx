import { checkAdmin } from "@/lib/utils/auth-utils";
import { db } from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Users,
  UserCog,
  Calendar,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

export default async function AdminPage() {
  const user = (await checkAdmin()) as any;

  // Get counts for the dashboard
  const productsCount = await db.product.count();
  const usersCount = await db.user.count({
    where: { role: "CUSTOMER" },
  });
  const artistsCount = await db.user.count({
    where: { role: "ARTIST" },
  });

  const stats = [
    {
      title: "Total Products",
      value: productsCount,
      icon: <Package className="h-6 w-6 text-rose-600" />,
      change: "+5% from last month",
      trend: "up",
    },
    {
      title: "Total Customers",
      value: usersCount,
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      change: "+12% from last month",
      trend: "up",
    },
    {
      title: "Artists",
      value: artistsCount,
      icon: <UserCog className="h-6 w-6 text-amber-600" />,
      change: "+2 new artists",
      trend: "up",
    },
    {
      title: "Appointments",
      value: 78,
      icon: <Calendar className="h-6 w-6 text-green-600" />,
      change: "+18% from last month",
      trend: "up",
    },
  ];

  const quickLinks = [
    {
      title: "Add New Product",
      description: "Create a new product listing",
      icon: <ShoppingBag className="h-6 w-6 text-rose-600" />,
      href: "/admin/products/new",
    },
    {
      title: "Manage Artists",
      description: "View and manage artist profiles",
      icon: <UserCog className="h-6 w-6 text-rose-600" />,
      href: "/admin/artists",
    },
    {
      title: "View Analytics",
      description: "See detailed performance metrics",
      icon: <TrendingUp className="h-6 w-6 text-rose-600" />,
      href: "/admin/analytics",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back, <span className="font-semibold">{user.name}</span>
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingUp className="h-3 w-3 text-red-500 mr-1 transform rotate-180" />
                )}
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links Section */}
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {quickLinks.map((link, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">
                {link.title}
              </CardTitle>
              {link.icon}
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {link.description}
              </CardDescription>
              <Button asChild className="w-full bg-rose-500 hover:bg-rose-600">
                <Link href={link.href}>Go</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Admin Info Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Administrator Information</CardTitle>
          <CardDescription>
            You have full access to all administrative functions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
              As an Admin, you have exclusive access to this control panel,
              which regular users and artists cannot access. Use these tools
              responsibly to manage the platform.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

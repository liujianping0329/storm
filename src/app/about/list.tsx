import { Sidebar } from "@/components/ui/sidebar"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function DashboardPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className="flex h-screen">
            {/* 左侧 Sidebar */}
            <Sidebar className="w-64 border-r">
    <div className="p-4">
    <h2 className="text-lg font-bold mb-4">Navigation</h2>
        <ul className="space-y-2">
    <li><a href="#" className="hover:underline">Home</a></li>
    <li><a href="#" className="hover:underline">Tasks</a></li>
    <li><a href="#" className="hover:underline">Settings</a></li>
    </ul>
    </div>
    </Sidebar>

    {/* 主内容 */}
    <main className="flex-1 p-6">
    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="max-w-sm">
    <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
    </main>
    </div>
)
}
